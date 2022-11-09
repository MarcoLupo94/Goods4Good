export interface User {
  username: string;
  password: string;
}

export interface Charity {
  name: string;
  description: string;
  img_url: string;
  shop_items: Item[];
}

export interface Item {
  title: string;
  description: string;
  img_url: string;
  price: number;
  charity_shop: Charity;
}
