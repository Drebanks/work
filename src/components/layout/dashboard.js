import SidebarItems from "@/components/UI/Sidebar/sidebars";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <aside className="bg-blue w-full max-w-[300px]">
        <SidebarItems />
      </aside>
      <main className="bg-[#F6F6F6] overflow-y-auto flex-1">{children}</main>
    </div>
  );
};

export default DashboardLayout;
