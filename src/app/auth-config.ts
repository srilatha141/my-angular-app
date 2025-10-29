import { Configuration, BrowserCacheLocation, LogLevel } from '@azure/msal-browser';

// client Id -- > 86b4f52d-2b58-4319-8e6e-781f7b960da2
// tenant Id --> 33c688d4-d094-4193-875d-649e1c78437f

export const msalConfig: Configuration = {
  auth: {
    clientId: '86b4f52d-2b58-4319-8e6e-781f7b960da2',
    authority: 'https://login.microsoftonline.com/33c688d4-d094-4193-875d-649e1c78437f', // or common if multi-tenant
    redirectUri: 'http://localhost:4200/',
    postLogoutRedirectUri: 'http://localhost:4200/',
    navigateToLoginRequestUrl: true,
  },
  cache: {
    cacheLocation: BrowserCacheLocation.LocalStorage,
    storeAuthStateInCookie: false,
  },
  system: {
    loggerOptions: {
      logLevel: LogLevel.Info,
      piiLoggingEnabled: false
    }
  }
};

export const loginRequest = {
  scopes: ['openid', 'profile', 'User.Read']
};

export const protectedResources = {
  graphMe: {
    endpoint: 'https://graph.microsoft.com/v1.0/me',
    scopes: ['User.Read']
  }
};
