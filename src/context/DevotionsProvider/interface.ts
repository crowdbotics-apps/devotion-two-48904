interface Devotion {
  id: string;
  title: string;
  body: string;
  date: string;
  isFavourite: boolean;
}

export interface DevotionsContextInterface {
  devotions: Devotion[];
  loading: boolean;
  fetchUserDevotions: () => Promise<void>;
}
