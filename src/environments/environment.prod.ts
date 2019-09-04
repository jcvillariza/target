export const environment = {
  production: true,
  site_url: '',

  auth: {
    clientID: '',
    domain: '',
    audience: '',
    auth0RedirectUri: this.site_url,
    auth0returnTo: this.site_url,
    scope: 'openid profile'
  }
};
