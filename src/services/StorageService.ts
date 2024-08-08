import AsyncStorage from '@react-native-async-storage/async-storage';

class StorageService {
  static setItem(key: string, value: any) {
    return AsyncStorage.setItem(key, JSON.stringify(value));
  }

  static getItem(key: string) {
    return AsyncStorage.getItem(key).then(value => {
      return JSON.parse(value as string);
    });
  }

  static removeItem(key: string) {
    return AsyncStorage.removeItem(key);
  }
}

export default StorageService;
