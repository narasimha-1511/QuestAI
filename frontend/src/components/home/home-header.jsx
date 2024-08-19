import React from "react";
import quesLogo from "../../assets/QuesLogoPP.svg";
import settingsIcon from "../../assets/icons/settings.svg";
import notificationsIcon from "../../assets/icons/notifications.svg";
import { useAuth } from "../../context/auth-context";
import LogoutIcon from "../../assets/icons/logout.svg";

const Header = () => {
  const { logout } = useAuth();
  return (
    <header className="container mx-auto py-6 px-4 flex items-center justify-between">
      <div className="brand-logo">
        <img src={quesLogo} alt="Ques Logo" />
      </div>
      <nav className="flex space-x-6">
        <button className="w-8 h-8">
          <img src={settingsIcon} alt="Settings" />
        </button>
        <button className="w-8 h-8">
          <img src={notificationsIcon} alt="Notifications" />
        </button>
        <button className="w-8 h-8" onClick={logout}>
          <img src={LogoutIcon} alt="User" />
        </button>
      </nav>
    </header>
  );
};

export default Header;