import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate , useLocation} from 'react-router-dom';
import { useLogin } from '../hooks/use-login';
import { useSignup } from '../hooks/use-signup';
import { useLogout } from '../hooks/use-logout';
import { verifyToken } from '../hooks/use-verify-token';
import Loading from '../components/shared/Loading';
import { ROUTE_MAP } from '../constants/routes';
import { AUTHENTICATED_ROUTES } from '../constants/route-groups';
import { matchPath } from 'react-router-dom';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const location = useLocation();
  const [loggedIn, setLoggedIn] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const { login, loading: loginLoading } = useLogin(setLoggedIn);
  const { signup, loading: signupLoading } = useSignup(setLoggedIn);
  const { logout } = useLogout(setLoggedIn, setLoadingAuth, navigate);

  useEffect(() => {
    verifyToken(setLoggedIn, setLoadingAuth)
    .then((response) => {
      if(response.data?.user){
        setUserName(response.data.user.fullName);
        setEmail(response.data.user.email);
      }
    }).catch((error) => {
      console.error(error);
    });
  }, []);

  useEffect(() => {
    if (!loadingAuth) {
      const isAuthenticatedRoute = AUTHENTICATED_ROUTES.some(route => {
        if (typeof route === 'string') {
          return matchPath({ path: route }, location.pathname);
        }
        return route && route.path ? matchPath({ path: route.path }, location.pathname) : false;
      });
      
      if (loggedIn && !isAuthenticatedRoute) {
        console.log('Logged in and not on authenticated route:', location.pathname);
        navigate(ROUTE_MAP.HOME);
      } else if (!loggedIn && isAuthenticatedRoute) {
        console.log('Not logged in and on authenticated route:', location.pathname);
        navigate(ROUTE_MAP.LOGIN);
      }
    }
  }, [loggedIn, loadingAuth, navigate, location.pathname]);

  if (loadingAuth) {
    return <Loading />;
  }

  return (
    <AuthContext.Provider value={{ loggedIn, login, logout, loading: loginLoading || signupLoading, signup , userName , email }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);