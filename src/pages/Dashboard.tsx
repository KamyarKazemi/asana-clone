import styles from "../css/dashboardStyles.module.css";
import { HiDotsHorizontal } from "react-icons/hi";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

function Dashboard() {
  return (
    <>
      <div
        className={`grid grid-col-4 grid-rows-2 mt-2 ${styles.gridContainer}`}
      >
        <div
          style={{ gridArea: "box1" }}
          className={`bg-[#FBFBFB] p-4 rounded flex flex-col gap-3  ${styles.gridBox}`}
        >
          <div className="flex items-center justify-between">
            <p className="text-[1.2rem]">Subscribers</p>
            <HiDotsHorizontal />
          </div>
          <div className="flex items-center justify-center">
            <div style={{ width: 120, height: 120 }}>
              <CircularProgressbar
                value={78}
                text={`78%`}
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
            <p>1234</p>
            <p className="text-blue-600">View More</p>
          </div>
        </div>
        <div
          style={{ gridArea: "box2" }}
          className={`bg-[#FBFBFB]  ${styles.gridBox}`}
        >
          box
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
