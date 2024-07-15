import SidebarItems from "@/components/UI/Sidebar/sidebars";
import Header from "@/components/UI/Header/header";
import { useState } from "react";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";

const DashboardLayout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <main className="h-screen flex flex-row justify-start relative">
      <button onClick={toggleSidebar} className="bots">
        <MdOutlineKeyboardArrowLeft />
      </button>
      <aside
        className={`bg-blue transition-width duration-300  ${
          sidebarOpen ? "w-full max-w-[300px]" : "w-0"
        } `}
      >
        <div className={`${sidebarOpen ? "" : "hidden"}`}>
          <SidebarItems />
        </div>
      </aside>
      <div className="bg-[#F6F6F6] overflow-y-auto flex-1">
        <div
          className={`bg-deepBlue transition-margin duration-300 ${
            sidebarOpen
              ? "w-[calc(100vw_-_300px)] left-[300px]"
              : "w-full left-0"
          } p-8 fixed top-0 right-0 h-[80px] shadow-md z-50`}
        >
          <Header />
        </div>
        <div className="p-6">{children}</div>
      </div>
    </main>
  );
};

export default DashboardLayout;
