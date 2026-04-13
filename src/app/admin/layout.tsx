import React from "react";
import AdminSidebar from "./AdminSidebar";

interface AdminDashboardLayoutProps {
  children: React.ReactNode;
}

const AdminDashboardLayout = ({ children }: AdminDashboardLayoutProps) => {
  return (
    <div className="flex flex-1 h-[calc(100vh-150px)]">
      <div className="w-16 lg:w-1/5 bg-purple-600 text-white p-2 lg:p-5">
        <AdminSidebar />
      </div>
      <div className="flex-1 overflow-y-auto h-[calc(100vh-150px)]">
        {children}
      </div>
    </div>
  );
};

export default AdminDashboardLayout;
