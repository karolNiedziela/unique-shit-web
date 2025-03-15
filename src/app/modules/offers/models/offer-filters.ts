export interface ProductCategory {
  id: number;
  name: string;
}

export interface Colour {
  id: number;
  name: string;
}

export interface ItemCondition {
  id: number;
  name: string;
}

export interface Manufacturer {
  id: number;
  name: string;
}

export interface OfferFilters {
  productCategories: ProductCategory[];
  colours: Colour[];
  itemConditions: ItemCondition[];
  manufacturers: Manufacturer[];
}
