import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <div className="grid grid-cols-1 grid-rows-2 gap-5 items-center justify-around h-full">
        <Header />
        <main className="outlet">
          <Outlet />
        </main>
      </div>
    </>
  );
}

export default Root;
