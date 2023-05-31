const fetch = require('node-fetch');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('172322039058-r4lskq37s2mm1ocm4ig9132n3m9otmd2.apps.googleusercontent.com');

class AuthService {
  async verifyUser(idToken, email) {
    const ticket = await client.verifyIdToken({
      idToken: idToken,
      audience: '172322039058-r4lskq37s2mm1ocm4ig9132n3m9otmd2.apps.googleusercontent.com', // Specify the CLIENT_ID of the app that accesses the backend
    });
    const payload = ticket.getPayload();

    if (payload.email == email) {
      return true;
    }
    return false;
  }
}

const AuthServiceInstance = new AuthService();
module.exports = AuthServiceInstance;
