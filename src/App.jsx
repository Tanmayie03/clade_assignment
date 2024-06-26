import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Navbar from "../components/Navbar";
import Jobs from "../components/Jobs";
import Applicants from "../components/Applicants";
import Match from "../components/Match";
import Messages from "../components/Messages";

const Layout = () => (
  <>
    <Navbar />
    <Outlet />
  </>
);
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Jobs /> },
        { path: "/Applicants", element: <Applicants /> },
        { path: "/Match", element: <Match /> },
        { path: "/Messages", element: <Messages /> },
      ],
    },
  ]);
  return (
    <div className="font-poppins no-scrollbar ">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
