import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, useNavigate } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

const Auth0ProviderWrapper = ({ children }) => {

  const navigate = useNavigate();

  const onRedirectCallback = (appState) => {
    navigate(appState?.returnTo || '/');
  };

  return (
    <Auth0Provider
      domain='dev-gc0cdlhjk7beuxzr.us.auth0.com'
      clientId='agRbFwLVzeMmQW2ZsuJWcvypttPz9kGe'
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
      onRedirectCallback={onRedirectCallback}
    >
      {children}
    </Auth0Provider>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <React.StrictMode>
      <Auth0ProviderWrapper>
        <App />
      </Auth0ProviderWrapper>
    </React.StrictMode>
  </BrowserRouter>
);