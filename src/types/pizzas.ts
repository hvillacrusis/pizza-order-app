import { Size, Topping } from ".";

export interface Pizza {
  id: string;
  uniqueId?: string;
  name: string;
  price: number;
  imageUrl: string;
  toppings?: Topping[];
  size?: Size;
}

// in types.ts
export interface PizzaCount extends Pizza {
  count: number;
  total: number;
  uniqueId: string;
}
