import styles from "../css/dashboardStyles.module.css";

function Dashboard() {
  return (
    <>
      <div className={`grid grid-col-4 grid-rows-2  ${styles.gridContainer}`}>
        <div
          style={{ gridArea: "box1" }}
          className={`bg-red-500 ${styles.gridBox}`}
        >
          box
        </div>
        <div
          style={{ gridArea: "box2" }}
          className={`bg-red-500 ${styles.gridBox}`}
        >
          box
        </div>
        <div
          style={{ gridArea: "box3" }}
          className={`bg-red-500 ${styles.gridBox}`}
        >
          box
        </div>
        <div
          style={{ gridArea: "box4" }}
          className={`bg-red-500 ${styles.gridBox}`}
        >
          box
        </div>
        <div
          style={{ gridArea: "box5" }}
          className={`bg-red-500 ${styles.gridBox}`}
        >
          box
        </div>
      </div>
    </>
  );
}

export default Dashboard;
