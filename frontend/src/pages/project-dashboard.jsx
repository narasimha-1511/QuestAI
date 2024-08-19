import React from "react";
import { Outlet, Link } from "react-router-dom";
import SideBar from "../components/dashboard/side-bar";
import NavBar from "../components/dashboard/nav-bar";

const ProjectDashboard = () => {
  return (
    <div className="flex h-screen w-full">
      <div className="w-[25%] h-full border-r-2 ">
        <SideBar />
      </div>
      <div className="w-[75%] h-full bg-[#F9F9F9]">
        <div className="w-full h-[10vh]">
          <NavBar />
        </div>
        <main className="w-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ProjectDashboard;
