import {api} from '@src/api';

class AuthService {
  static async login(payload: any): Promise<boolean> {
    return api.post('login/', payload).then(response => {
      return response.data;
    });
  }

  static async signup(payload: any): Promise<boolean> {
    return api.post('signup/', payload).then(response => {
      return response.data;
    });
  }
}

export default AuthService;
