import { create } from "zustand";
import { Pizza, PizzaCount } from "../types";

type Basket = {
  items: PizzaCount[];
  total: number;
  addItemToBasket: (item: Pizza) => void;
  removeItemFromBasket: (id: string) => void;
};

export const useBasketStore = create<Basket>((set) => ({
  items: [],
  total: 0,

  addItemToBasket: (item: Pizza) =>
    set((state) => {
      const uniqueId =
        item.id +
        "|" +
        (item.size?.id || "") +
        "|" +
        (item.toppings
          ?.map((topping) => topping.id)
          .sort()
          .join(",") || "");
      const itemInBasket = state.items.find((i) => i.uniqueId === uniqueId);
      if (itemInBasket) {
        // increment count of existing item and update total price
        itemInBasket.count += 1;
        itemInBasket.total += item.price; // increment total for this item
        return {
          items: [...state.items],
          total: state.total + item.price,
        };
      } else {
        // add new item to the basket
        return {
          items: [
            ...state.items,
            { ...item, uniqueId, count: 1, total: item.price },
          ],
          total: state.total + item.price,
        };
      }
    }),

  removeItemFromBasket: (uniqueId: string) =>
    set((state) => {
      const itemIndex = state.items.findIndex((i) => i.uniqueId === uniqueId);
      if (itemIndex === -1) return state; // if item not found, return current state
      const itemToRemove = state.items[itemIndex];
      // decrement count and if it's 0 remove from the items array
      itemToRemove.count -= 1;
      itemToRemove.total -= itemToRemove.price; // decrement total for this item
      let updatedItems;
      if (itemToRemove.count === 0) {
        updatedItems = state.items.filter((i) => i.uniqueId !== uniqueId);
      } else {
        updatedItems = [...state.items];
      }
      return {
        items: updatedItems,
        total: state.total - itemToRemove.price,
      };
    }),
}));
