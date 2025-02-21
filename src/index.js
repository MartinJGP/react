import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {GoogleOAuthProvider} from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <GoogleOAuthProvider clientId="52276096510-ma7g2suppjchouu7roffe698q7is1jnd.apps.googleusercontent.com">
    <App />
      </GoogleOAuthProvider>
  </React.StrictMode>
);


