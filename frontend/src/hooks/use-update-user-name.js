import { useState } from "react";
import { apiInstance } from "../utils/api-instance";
import { useAuth } from "../context/auth-context";

const useUpdateUserName = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUserName } = useAuth();

  const updateUserName = async (userId, newUserName) => {
    setIsLoading(true);
    setError(null);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    try {
      const response = await apiInstance.put(`/api/users/`, {
        userName: newUserName,
        email: userId,
      });
      setUserName(newUserName);
      setIsLoading(false);
      return response.data;
    } catch (err) {
      setIsLoading(false);
      setError(err.message || "An error occurred while updating the username");
      throw err;
    }
  };

  return { updateUserName, isLoading, error };
};

export default useUpdateUserName;
