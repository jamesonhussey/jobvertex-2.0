import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service'
import logo from '../../Images/cropped-briefcase-logo.jpg'
import './NavBarNoLog.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut()
    setUser(null)
  }

  return (
    <nav class="navbar sticky-top bg-body-tertiary" style={{ backgroundColor: "white" }}>
      <div id="navigation-bar" class="container-fluid" style={{ backgroundColor: "white" }}>
        <Link class="navbar-brand" to="/">
          <img className='logo-image' src={logo} alt="" />
          <span className='logo-name'>JobVertex</span>
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <Link to="/" class="nav-link">Home</Link>
            <Link to="/jv-originals" class="nav-link disabled" aria-disabled="true">JV Exclusives</Link>
            <Link class="nav-link" to="/apply">Join the Team</Link>
            <Link class="nav-link" to="/auth-page">Log In</Link>
            <Link class="nav-link" to="/auth-page">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}