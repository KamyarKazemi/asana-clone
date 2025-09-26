import styles from "../css/dashboardStyles.module.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "../redux/store/store";
import { postInfoToAi } from "../redux/asyncThunks/postInfoToAi";
import { fetchComments } from "../redux/asyncThunks/fetchComments";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

function Dashboard() {
  const dispatch = useDispatch<AppDispatch>();

  const [isAiShown, setIsAiShown] = useState(false);
  const [isCommentsShown, setIsCommentsShown] = useState(false);

  const { data: searchResluts, status } = useSelector(
    (state: RootState) => state.users
  );

  const {
    data: comments,
    status: commentsStatus,
    error: commentsError,
  } = useSelector((state: RootState) => state.comments);

  // channel name logic
  let channelName;
  if (status === "idle") {
    channelName = "Dashboard";
  } else if (status === "loading") {
    channelName = "Dashboard";
  } else if (status === "succeeded" && searchResluts.length > 0) {
    channelName = searchResluts[0].username;
  } else {
    channelName = "Channel Not Found";
  }

  // subscriber count logic
  let channelSubs = 0;
  if (status === "succeeded" && searchResluts.length > 0) {
    channelSubs = searchResluts[0].subs;
  }

  // ✅ Define a goal (you can change this to whatever you want)
  const goal = 1000;

  // ✅ Calculate progress percentage safely
  const progress =
    channelSubs > 0 ? Math.min((channelSubs / goal) * 100, 100) : 0;

  const {
    data: aiAnalysis,
    status: aiStatus,
    error: aiError,
  } = useSelector((state: RootState) => state.infos);

  const handleSendToAi = () => {
    setIsAiShown(true);
    if (status === "succeeded" && searchResluts.length > 0) {
      console.log("Channel data being sent:", searchResluts[0]);
      console.log("Username:", searchResluts[0].username);
      console.log("Subs:", searchResluts[0].subs);
      console.log("Videos:", searchResluts[0].videos);
      dispatch(postInfoToAi(searchResluts[0]));
    }
  };

  const getComments = () => {
    setIsCommentsShown(true);
    if (status === "succeeded" && searchResluts.length > 0) {
      dispatch(fetchComments(searchResluts[0].username));
    }
  };

  return (
    <>
      <h1>{channelName}</h1>
      <div
        className={`grid grid-col-4 grid-rows-2 mt-2 p-3 ${styles.gridContainer}`}
      >
        <div
          style={{ gridArea: "box1" }}
          className={`bg-[#FBFBFB] p-4 rounded flex flex-col gap-3 ${styles.goalBox}`}
        >
          <div className="flex items-center justify-between">
            <p className="text-[1.2rem]">Subscribers</p>
            <HiDotsHorizontal />
          </div>

          <div className="flex items-center justify-center">
            <div style={{ width: 120, height: 120 }}>
              <CircularProgressbar
                value={progress}
                text={`${Math.round(progress)}%`}
                styles={buildStyles({
                  textColor: "#007bff",
                  pathColor: "#007bff",
                  trailColor: "#e6e6e6",
                  strokeLinecap: "round",
                })}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p>{channelSubs}</p>
            <p className="text-blue-600">Road To {goal}</p>
          </div>
        </div>

        <div
          style={{ gridArea: "box2" }}
          className={`bg-[#FBFBFB] flex flex-col gap-3 p-2  ${styles.aiBox}`}
        >
          <div className="flex flex-row justify-between">
            <h3>AI Analysis</h3>
            <div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors disabled:bg-gray-400"
                onClick={handleSendToAi}
                disabled={
                  status !== "succeeded" ||
                  searchResluts.length === 0 ||
                  aiStatus === "loading"
                }
              >
                {aiStatus === "loading" ? "Analyzing..." : "Analyze"}
              </button>
              {isAiShown ? (
                <button
                  onClick={() => setIsAiShown(false)}
                  className="bg-white text-black-500 hover:bg-blue-600 px-3 py-1 rounded transition-colors mr-1 ml-1"
                >
                  Hide
                </button>
              ) : null}
            </div>
          </div>
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: "7rem" }}
              animate={
                isAiShown
                  ? { opacity: 1, height: "14rem" }
                  : { opacity: 0, height: "7rem" }
              }
              exit={{ opacity: 0, height: "7rem" }}
              transition={{ duration: 0.5 }}
              className="text-sm max-h-40 overflow-y-auto"
            >
              {isAiShown && (
                <>
                  {aiStatus === "idle" && (
                    <p className="text-gray-500">
                      Click analyze to get AI insights
                    </p>
                  )}
                  {aiStatus === "loading" && (
                    <p className="text-blue-500">Analyzing channel data...</p>
                  )}
                  {aiStatus === "succeeded" && aiAnalysis && (
                    <div className="space-y-2">
                      <div className="text-green-600 font-medium">
                        {aiAnalysis.analysis}
                      </div>
                      {aiAnalysis.insights &&
                        aiAnalysis.insights.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-gray-700">
                              Insights:
                            </h4>
                            <ul className="list-disc list-inside text-gray-600">
                              {aiAnalysis.insights.map((insight, index) => (
                                <li key={index}>{insight}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                      {aiAnalysis.recommendations &&
                        aiAnalysis.recommendations.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-gray-700">
                              Recommendations:
                            </h4>
                            <ul className="list-disc list-inside text-gray-600">
                              {aiAnalysis.recommendations.map((rec, index) => (
                                <li key={index}>{rec}</li>
                              ))}
                            </ul>
                          </div>
                        )}
                    </div>
                  )}
                  {aiStatus === "failed" && (
                    <div className="text-red-600">
                      <p className="font-medium">Analysis Failed</p>
                      <p className="text-sm">{aiError}</p>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <div
          style={{ gridArea: "box3" }}
          className={`bg-[#FBFBFB] p-3 flex flex-col ${styles.gridBox}`}
        >
          <div className="flex justify-between items-center">
            <h3>Recent Comments</h3>
            <div>
              <button
                onClick={getComments}
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors disabled:bg-gray-400"
                disabled={
                  status !== "succeeded" ||
                  searchResluts.length === 0 ||
                  commentsStatus === "loading"
                }
              >
                {commentsStatus === "loading" ? "Loading..." : "Show"}
              </button>
              {isCommentsShown && (
                <button
                  onClick={() => setIsCommentsShown(false)}
                  className="bg-white text-black-500 hover:bg-blue-600 px-3 py-1 rounded transition-colors mr-1 ml-1"
                >
                  Hide
                </button>
              )}
            </div>
          </div>

          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: "3rem" }}
              animate={
                isCommentsShown
                  ? { opacity: 1, height: "10rem" }
                  : { opacity: 0, height: "3rem" }
              }
              exit={{ opacity: 0, height: "3rem" }}
              transition={{ duration: 0.5 }}
              className="text-sm max-h-40 overflow-y-auto mt-2"
            >
              {isCommentsShown && (
                <>
                  {commentsStatus === "idle" && (
                    <p className="text-gray-500">Click show to load comments</p>
                  )}
                  {commentsStatus === "loading" && (
                    <p className="text-blue-500">Loading comments...</p>
                  )}
                  {commentsStatus === "succeeded" &&
                    comments &&
                    comments.map((comment) => (
                      <div key={comment.id}>{comment.comment}</div>
                    ))}
                  {commentsStatus === "failed" ? (
                    <div>error: {commentsError}</div>
                  ) : null}
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
        <div
          style={{ gridArea: "box4" }}
          className={`bg-[#FBFBFB] ${styles.gridBox}`}
        >
          box
        </div>
        <div
          style={{ gridArea: "box5" }}
          className={`bg-[#FBFBFB] ${styles.gridBox}`}
        >
          box
        </div>
      </div>
    </>
  );
}

export default Dashboard;
