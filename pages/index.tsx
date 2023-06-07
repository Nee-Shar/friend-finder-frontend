import { useState } from 'react';
import { useSelector } from 'react-redux';
import type { StoreType } from '../redux/store_type';
import Login from "./login.tsx";
import Logout from "./logout.tsx";
import Signup from "./signup.tsx";

const HomePage = () => {
  const loggedIn = useSelector((state: StoreType) => state.auth.loggedIn);
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const renderAuthenticationButtons = () => {
    if (loggedIn) {
      return <Logout />;
    } else {
      return (
        <div>
          {!showSignup && (
            <button onClick={() => setShowSignup(true)}>Sign Up</button>
          )}
          {!showLogin && (
            <button onClick={() => setShowLogin(true)}>Login</button>
          )}
        </div>
      );
    }
  };

  return (
    <div>
      {renderAuthenticationButtons()}
      {showSignup && <Signup />}
      {showLogin && <Login />}
    </div>
  );
};

export default HomePage;
