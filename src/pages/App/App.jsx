import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import HomePage from '../HomePage/HomePage';
import ApplicationPage from '../ApplicationPage/ApplicationPage';
import NavBar from '../../components/NavBar/NavBar';
import NavBarNoLog from '../../components/NavBarNoLog/NavBarNoLog'
import { getUser } from '../../utilities/users-service'
import JuniorWevDevApplicationPage from '../ApplicationFormPage/ApplicationFormPage'
import JVOriginalsPage from '../JVOriginalsPage/JVOriginalsPage'
import PartnerProjectsPage from '../PartnerProjectsPage/PartnerProjectsPage'
import AfterSignUpPage from '../AfterSignUpPage/AfterSignUpPage';
import SignUpAndLoginLandingPage from '../SignUpAndLoginLandingPage/SignUpAndLoginLandingPage';

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/apply" element={<ApplicationPage />} />
            <Route path="/junior-web-dev-application" element={<AfterSignUpPage />} />
            <Route path="auth-page" element={<SignUpAndLoginLandingPage />} />
          </Routes>
        </>
        :
        <>
          <NavBarNoLog setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/" element={<HomePage />} />
            <Route path="/apply" element={<ApplicationPage />} />
            <Route path="/jv-originals" element={<JVOriginalsPage />} />
            <Route path="/auth-page" element={<AuthPage setUser={setUser} />} />
            <Route path="/junior-web-dev-application" element={<JuniorWevDevApplicationPage setUser={setUser} />} />
            <Route path="/partner-projects" element={<PartnerProjectsPage />} />
          </Routes>
        </>
      }
    </main>
  );
}