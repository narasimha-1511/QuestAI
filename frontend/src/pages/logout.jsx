import React from "react";
import { useAuth } from "../context/auth-context";
import Button from "../components/shared/Button";

const LogoutDemo = () => {
  const { logout } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <div>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default LogoutDemo;
