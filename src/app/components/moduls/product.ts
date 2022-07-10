export interface Product {
  name: string;
  brand: string;
  images: [Images];
  sizes: [Sizes];
  descriptions: Descriptions;
}

export interface Images {
  number: number;
  url: string;
}

export interface Sizes {
  size: string;
  cost: number;
}

export interface Descriptions {
   vendor: string;
   material: string;
   color: string;
   sex: string;
   brand: string;
   type: string;
   season: string;
}

