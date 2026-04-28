import { useState } from "react";
import Sidebar from "../components/sidebar/Sidebar";
import Topbar from "../components/sidebar/Topbar";

const MainLayout = () => {
  const [openSideBar, setOpenSideBar] = useState(true);
  return (
    <div>
      <div className="yoki w-full h-full flex">
        <div
          className={`yokii ${openSideBar ? "w-64 md:flex flex-col" : "hidden"} `}
        >
          <Sidebar />
        </div>

        <div>
          <Topbar />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
