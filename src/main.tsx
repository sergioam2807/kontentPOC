import React from 'react'
import { Auth0Provider } from '@auth0/auth0-react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_APP_AUTH_DOMAIN}
      clientId={import.meta.env.VITE_APP_AUTH_CLIENT}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
)
