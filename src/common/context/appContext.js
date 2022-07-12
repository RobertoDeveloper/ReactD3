import { createContext, useEffect, useState } from 'react'; 
import { mockAuthData } from '../api/auth';

const AuthContext = createContext();
export default AuthContext;

export const AuthSetContext = createContext();

export const AppProvider = ({ children }) => { 
  const [auth, setAuth] = useState({loading: true});

  useEffect(() => {
    (async () => {
      const mergeData = { loading: false};

      try {
        const userAuth = await mockAuthData(false); 

        if (userAuth) {
          setAuth({ ...mergeData, ...userAuth });
        } else {
          setAuth(mergeData);
        }
        
      } catch (err) {
        setAuth(mergeData);
      }

    })();
  }, []);

  return (
    <AuthContext.Provider value={auth}>
      <AuthSetContext.Provider value={setAuth}>
        {children}
      </AuthSetContext.Provider>
    </AuthContext.Provider>
  ); 
}
