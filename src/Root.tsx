import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div className="h-screen grid grid-rows-2 gap-5">
      <Header />
      <main className="outlet w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
