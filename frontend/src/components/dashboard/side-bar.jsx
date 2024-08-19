import React, { useEffect } from "react";
import QuestLogo from "../../assets/QuesLogoPP.svg";
import { useNavigate } from "react-router-dom";
import { sidebarItems } from "../../constants/side-bar-items";
import Settings from "../../assets/dashBoardIcons/settings.svg";
import ProfilePic from "../../assets/dashBoardIcons/profileIcon.svg";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

const SideBar = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { userName, email } = useAuth();

  useEffect(() => {
    console.log(userName, email, "changes in sidebar");
  }, [userName, email]);

  return (
    <div className="h-full flex flex-col items-center">
      <img
        src={QuestLogo}
        alt="Quest Logo"
        className="w-[8rem] h-[8rem] object-contain flex-shrink mb-[-1.5rem]"
      />
      {sidebarItems.map((item, index) => {
        const isActive = item.to == location.pathname.split("/").pop();
        return (
          <SidebarButton
            key={index}
            to={`/project/${id}/${item.to}`}
            icon={item.icon}
            active={isActive}
          >
            {item.label}
          </SidebarButton>
        );
      })}
      <div className="w-[80%] h-[1px] bg-slate-300 mt-6"></div>
      <div className="mt-auto mb-10 w-full flex flex-col justify-center items-center">
        <SidebarButton
          to={`/project/${id}/help`}
          icon={Settings}
          active={location.pathname.split("/").pop() == "help"}
        >
          Help
        </SidebarButton>
        <div className="w-[80%] h-[1px] bg-slate-300 mt-2"></div>

        <div
          className="flex items-center justify-start ml-12 mt-4 w-full cursor-pointer"
          onClick={() => navigate(`/project/${id}/settings`)}
        >
          <img
            src={ProfilePic}
            alt="icon"
            className="w-12 h-12 object-contain"
          />
          <div className="flex flex-col ml-4">
            <span className="text-lg font-medium">
              {userName ? userName : "John Doe"}
            </span>
            <span className="text-sm text-gray-500">
              {email ? email : "john.doe@quest.com"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarButton = ({ to, icon, children, active = false }) => {
  const navigate = useNavigate();
  return (
    <div className="w-full pr-4 my-0.5">
      <button
        onClick={() => navigate(to)}
        className={`flex items-center justify-start w-full h-16 px-4 rounded-lg ${
          active
            ? "bg-purple-100 text-purple-700"
            : "text-gray-600 hover:bg-gray-100"
        }`}
      >
        <img src={icon} alt="icon" className="ml-4 w-3 h-3 object-contain" />
        <span className="ml-3 text-lg font-medium">{children}</span>
      </button>
    </div>
  );
};

export default SideBar;
