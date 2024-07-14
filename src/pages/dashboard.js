import React from 'react'
import DashboardLayout from "@/components/layout/dashboard";
import Tablecontent from '@/components/dash/table';

const Dashboard = () => {
  return (
      <DashboardLayout>
        <div className="pt-20">
          <p className="tex-[24px] font-bold">Welcome, Toluwalope!</p>
        </div>
          <Tablecontent/>
    </DashboardLayout>
  )
}

export default Dashboard