import fetch from 'node-fetch';

class AuthService {

  
  async verifyUser(userToken){
    
    const data = await fetch(`https://oauth2.googleapis.com/tokeninfo?id_token=${userToken}`,{method:'GET'})
    

  }


}

const AuthServiceInstance = new AuthService();
module.exports = AuthServiceInstance;
