import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/landingPage.jsx'
import Dashboard from './pages/dashboard.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { OCConnect } from '@opencampus/ocid-connect-js';
import { LoginCallBack } from '@opencampus/ocid-connect-js';
import { useNavigate } from 'react-router-dom';
const opts = {
  redirectUri: 'https://educhaiin.netlify.app/redirect',
}
const LoginCallbackComponent = () => {
  const navigate = useNavigate();

  const loginSuccess = () => {
    // Redirect to the dashboard after successful login
    navigate('/dashboard');
  };

  const loginError = () => {
    // Handle login error (optional)
    console.error('Login failed');
  };

  return (
    <LoginCallBack errorCallback={loginError} successCallback={loginSuccess} />
  );
};
AOS.init();
function App() {
  return (
    <>
    <OCConnect opts={opts} sandboxMode={true}>
      <BrowserRouter>
            <Routes>
                <Route index element={<LandingPage />} />
                <Route path="/home" element={<LandingPage />} />
                <Route path="/redirect" element={<LoginCallbackComponent/>} />
                <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
      </BrowserRouter>
    </OCConnect>
    </>
  )
}

export default App
