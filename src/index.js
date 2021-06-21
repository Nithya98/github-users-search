import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Auth0Provider } from '@auth0/auth0-react'
import { GithubProvider } from './context/context'
import { DOMAIN_KEY, CLIENT_KEY } from './Apikey'

ReactDOM.render(
  <React.StrictMode>
    <Auth0Provider
      domain={DOMAIN_KEY}
      clientId={CLIENT_KEY}
      redirectUri={window.location.origin}
      cacheLocation='localstorage'
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
