import React, {useState} from 'react';
import Login from './Login';
import CreateAccount from './CreateAccount';

const Auth = ({ onAuthenticated, apiHost }) => {
  const [showLogin, setShowLogin] = useState(true);


  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', height: '100%', paddingTop: '40px'}}>
      {
        showLogin ? <Login apiHost={apiHost} onAuthenticated={onAuthenticated} /> : <CreateAccount apiHost={apiHost} onAuthenticated={onAuthenticated} />
      }
      <a onClick={() => setShowLogin(!showLogin)}>{ showLogin ? 'Create Account' : 'Login' }</a>
    </div>
  )
};

export default Auth;
