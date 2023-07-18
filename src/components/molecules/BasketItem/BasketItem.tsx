import React from "react";
import { Pizza } from "../../../types";

interface BasketItemProps {
  pizza: Pizza;
  itemCount: number;
  itemTotal: number;
  onIncrease: () => void;
  onDecrease: () => void;
}

const BasketItem: React.FC<BasketItemProps> = ({
  pizza,
  itemCount,
  itemTotal,
  onIncrease,
  onDecrease,
}) => {
  const roundedImageClass = "w-8 h-8 object-cover rounded-full";
  const buttonClass = "text-white font-medium py-1 px-2 rounded-lg text-button";
  const toppings = pizza.toppings?.map((topping) => topping.name).join(", ");

  return (
    <div className="mb-6 bg-gray-light shadow-md rounded-lg p-5 space-x-5">
      <div className="flex flex-row items-center">
        <div className={roundedImageClass + " mr-5"}>
          <img
            className={roundedImageClass}
            src={pizza.imageUrl}
            alt={pizza.name}
          />
        </div>

        <div className="flex-grow">
          <div className="font-semibold text-lg mb-2 truncate">
            {pizza.name}
          </div>
          <div className="flex items-center justify-between space-x-4">
            <span className="font-semibold text-xl text-gray-dark">
              ${itemTotal}
            </span>
            <div className="flex items-center space-x-2">
              <button className={buttonClass + " bg-red"} onClick={onDecrease}>
                -
              </button>
              <span className="font-semibold text-lg text-gray-dark">
                {itemCount}
              </span>
              <button
                className={buttonClass + " bg-green"}
                onClick={onIncrease}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <span className="font-medium text-base text-gray-dark">
          {`${pizza.size ? pizza.size.name : "default size"}${
            toppings ? ", " + toppings : ""
          }`}
        </span>
      </div>
    </div>
  );
};

export default BasketItem;
