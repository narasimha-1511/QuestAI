
import { useState } from 'react';
import { apiInstance } from '../utils/api-instance';
import { useNavigate } from 'react-router-dom';

const useSignup = (setLoggedIn) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const signup = async (username, password, fullName) => {
    setLoading(true);
    try {
      const response = await apiInstance.post('/api/auth/signup', {
        fullName: fullName,
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
      console.error('Signup failed:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { signup, loading };
};

export { useSignup };