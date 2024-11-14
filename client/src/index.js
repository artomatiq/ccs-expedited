import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

console.log('index.js before render');

const onRedirectCallback = (appState) => {
  window.history.replaceState({}, document.title, appState?.returnTo || '/');
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <Auth0Provider
    domain='dev-gc0cdlhjk7beuxzr.us.auth0.com'
    clientId='agRbFwLVzeMmQW2ZsuJWcvypttPz9kGe'
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    onRedirectCallback={onRedirectCallback}
    cacheLocation="localstorage" 
    useRefreshTokens={true} 
  >
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Auth0Provider>
);