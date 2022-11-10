export interface User {
  id: string;
  username: string;
  password: string;
  items: Item[];
  donations: Donation[];
}

export interface Charity {
  id: string;
  name: string;
  description: string;
  location: string;
  coverImageUrl: string;
  profileUrl: string;
  matchedTerms: string[];
  shop_items: Item[];
}

export interface Item {
  id: string;
  title: string;
  description: string;
  img_url: string;
  price: number;
  charity_shop: Charity;
}
export interface Donation {
  id: string;
  title: string;
  description: string;
  amount: number;
  charity: Charity;
}
