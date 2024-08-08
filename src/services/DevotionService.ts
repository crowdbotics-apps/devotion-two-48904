import {api} from '@src/api';

class DevotionService {
  static async getDevotions() {
    return api.get('user/devotions').then(response => {
      return response.data;
    });
  }
}

export default DevotionService;
