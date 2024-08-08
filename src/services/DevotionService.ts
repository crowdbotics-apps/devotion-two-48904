import {api} from '@src/api';

class DevotionService {
  static async getDevotions(params?: string) {
    let url = 'devotions/user-devotions/';
    if (params) {
      url += `?${params}`;
    }
    return api.get(url).then(response => {
      return response.data;
    });
  }
}

export default DevotionService;
