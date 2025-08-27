import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <Header />
      <main className="outlet">
        <Outlet />
      </main>
    </>
  );
}

export default Root;
