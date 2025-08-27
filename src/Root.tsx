import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <div className="grid grid-cols-3">
        <Header />
        <main className="outlet">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Root;
