import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import MainPage from "./pages/MainPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <MainPage />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
