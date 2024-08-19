import { apiInstance } from '../utils/api-instance';

const verifyToken = async (setLoggedIn, setLoadingAuth) => {
    try {
      console.log('verifying token');
      const response = await apiInstance.get('/api/auth/verify-token');
      if (response.status === 200) {
        setLoggedIn(true);
      } else {
        throw new Error(response.data?.error || 'Token verification failed');
      }
      return response;
    } catch (error) {
      setLoggedIn(false);
      console.error('Token verification failed:', error);
    } finally {
      setLoadingAuth(false);
    }
};

export { verifyToken };