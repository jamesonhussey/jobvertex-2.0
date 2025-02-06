import { Link } from 'react-router-dom';

export default function SignUpAndLoginLandingPage() {
    return (
      <>
        <h1>You're logged in!</h1>
        <h3><Link to="/">Click here to return to the home page.</Link></h3>
      </>
    );
  }