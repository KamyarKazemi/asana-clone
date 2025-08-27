import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="h-screen grid grid-rows-[1fr_auto] gap-5">
      <main className="outlet w-full">
        <Outlet />
      </main>
      <Header />
    </div>
  );
}

export default Root;
