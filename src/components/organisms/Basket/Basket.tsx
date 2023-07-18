import { FC } from "react";
import { Pizza, PizzaCount } from "../../../types";
import BasketItem from "../../molecules/BasketItem/BasketItem";

interface BasketProps {
  itemsInBasket: PizzaCount[];
  totalAmount: number;
  removeItemFromBasket: (index: string) => void;
  addItemFromBasket: (pizza: Pizza) => void;
}

export const Basket: FC<BasketProps> = ({
  itemsInBasket,
  totalAmount,
  removeItemFromBasket,
  addItemFromBasket,
}) => (
  <div className="z-50 absolute right-0 bg-gray-light p-6 mt-2 shadow-md rounded-lg">
    {itemsInBasket.length > 0 ? (
      <>
        {itemsInBasket.map((basketItem) => (
          <BasketItem
            onIncrease={() => {
              addItemFromBasket(basketItem);
            }}
            key={basketItem.uniqueId}
            pizza={basketItem}
            itemCount={basketItem.count}
            itemTotal={basketItem.total}
            onDecrease={() => removeItemFromBasket(basketItem.uniqueId)}
          />
        ))}
        <hr className="my-2" />
        <div className="flex items-center justify-between">
          <span className="font-semibold text-lg text-gray-dark">Total:</span>
          <span className="text-lg text-gray-dark">
            ${totalAmount.toFixed(2)}
          </span>
        </div>
        <button className="mt-2 w-full bg-green text-white rounded-lg p-2 text-lg font-medium">
          Checkout
        </button>
      </>
    ) : (
      <span className="text-lg text-gray-dark">Your basket is empty.</span>
    )}
  </div>
);
