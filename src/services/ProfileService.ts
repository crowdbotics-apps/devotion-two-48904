import {api} from '@src/api';

class ProfileService {
  static async getProfile() {
    return api.get('users/get-profile/').then(response => {
      return response.data;
    });
  }

  static async updateProfile(payload: any) {
    return api.patch('users/update-profile/', payload).then(response => {
      return response.data;
    });
  }
}

export default ProfileService;
