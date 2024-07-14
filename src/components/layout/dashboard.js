import SidebarItems from "@/components/UI/Sidebar/sidebars";
import Header from "@/components/UI/Header/header";

const DashboardLayout = ({ children }) => {
  return (
    <main className="h-screen flex flex-row justify-start">
      <aside className="bg-blue w-full max-w-[300px]">
        <SidebarItems />
      </aside>
      <div className="bg-[#F6F6F6] overflow-y-auto flex-1">
        <Header/>
        <div className="p-6">
          {children}
        </div>
      </div>
    </main>
  );
};

export default DashboardLayout;
