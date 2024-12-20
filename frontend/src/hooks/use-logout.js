import { apiInstance } from "../utils/api-instance";

const useLogout = (setLoggedIn, setLoadingAuth, navigate) => {
  const logout = async () => {
    try {
      setLoadingAuth(true);
      const response = await apiInstance.post("/api/auth/logout");
      if (response.status === 200) {
        setLoggedIn(false);
        sessionStorage.clear();
        navigate("/");
      }
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoadingAuth(false);
    }
  };

  return { logout };
};

export { useLogout };
