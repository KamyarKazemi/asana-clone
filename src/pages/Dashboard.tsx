import styles from "../css/dashboardStyles.module.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";
import type { RootState } from "../redux/store/store";

function Dashboard() {
  const { data: searchResluts, status } = useSelector(
    (state: RootState) => state.users
  );

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

  return (
    <>
      <h1>{channelName}</h1>
      <div
        className={`grid grid-col-4 grid-rows-2 mt-2 ${styles.gridContainer}`}
      >
        <div
          style={{ gridArea: "box1" }}
          className={`bg-[#FBFBFB] p-4 rounded flex flex-col gap-3 ${styles.gridBox}`}
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
          className={`bg-[#FBFBFB] flex flex-col gap-3 p-2  ${styles.gridBox}`}
        >
          <div className="flex flex-row justify-between">
            <h3>Ai Anylizes</h3>
            <button className="bg-red-500">Anylize</button>
          </div>
          <div>ai caption</div>
        </div>
        <div
          style={{ gridArea: "box3" }}
          className={`bg-[#FBFBFB] ${styles.gridBox}`}
        >
          box
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
