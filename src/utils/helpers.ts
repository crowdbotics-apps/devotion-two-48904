import StorageService from '@services/StorageService';

export const getUser = async () => {
  return (await JSON.parse(await StorageService.getItem('user'))?.name) || '';
};
