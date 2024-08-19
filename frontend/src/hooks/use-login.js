import { useState } from 'react';
import { apiInstance } from '../utils/api-instance';
import { useNavigate } from 'react-router-dom';

const useLogin = (setLoggedIn) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const login = async (username, password) => {
    setLoading(true);
    try {
      const response = await apiInstance.post('/api/auth/login', {
        email: username,
        password: password,
      });

      if (response.data?.error) {
        throw new Error(response.data.error);
      }

      setLoggedIn(true);
      navigate('/');
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return error.message || "Login failed";
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};

export { useLogin };