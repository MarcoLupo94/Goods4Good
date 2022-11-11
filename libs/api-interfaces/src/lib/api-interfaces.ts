export interface User {
  _id: string;
  email: string;
  username: string;
  cart: Item[];
  donations: Donation[];
}

export interface Charity {
  _id: string;
  name: string;
  description: string;
  location: string;
  coverImageUrl: string;
  profileUrl: string;
  tags: string[];
  shop_items: Item[];
}

export interface Item {
  _id: string;
  title: string;
  description: string;
  img_url: string;
  price: number;
  size: string;
  charity_shop: string;
  user_owner: string;
}
export interface Donation {
  _id: string;
  title: string;
  description: string;
  amount: number;
  charity: Charity;
  owner: User;
}
