import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { appTheme } from './common/themes/appTheme'
import { AppProvider } from './common/context/appContext';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { lazy, Suspense } from "react";
import { ProtectedRoute } from './components/guard/ProtectedRoute';
import { RedirectPage } from './pages/RedirectPage';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const HomePage = lazy(() => import('./pages/HomePage'));

function App() {
  return (
    <>
      <Router>
        <AppProvider>
          <ThemeProvider theme={appTheme}>
            <CssBaseline />
            <Suspense fallback={<></>}>
              <Routes>
                <Route path='/' element={
                  <ProtectedRoute>
                    <LoginPage />
                  </ProtectedRoute>} />
                <Route path='/HomePage'
                  element={
                    <ProtectedRoute>
                      <HomePage />
                    </ProtectedRoute>
                  } />
                <Route path='/redirect' element={<RedirectPage />} />
              </Routes>
            </Suspense>
          </ThemeProvider>
        </AppProvider>
      </Router>
    </>
  );
}

export default App;
