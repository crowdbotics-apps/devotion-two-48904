export interface Devotion {
  id: number;
  message: string;
}
interface UserDevotion {
  id: number;
  devotion: Devotion;
}

export interface DevotionsContextInterface {
  userDevotions: UserDevotion[];
  loading: boolean;
  fetchUserDevotions: () => Promise<void>;
}
