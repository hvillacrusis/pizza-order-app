import React from "react";
import ButtonChoose from "../../atoms/ButtonChoose/ButtonChoose";
import ImagePizza from "../../atoms/ImagePizza/ImagePizza";
import TextPizzaPrice from "../../atoms/TextPizzaPrice/TextPizzaPrice";
import TextPizzaTitle from "../../atoms/TextPizzaTitle/TextPizzaTitle";
import { Pizza } from "../../../types";

interface PizzaCardProps {
  pizza: Pizza;
  onChoose: () => void;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ pizza, onChoose }) => (
  <div
    key={pizza.id}
    className="card border border-gray-light rounded-lg overflow-hidden shadow-md flex flex-col bg-white"
  >
    <div className="flex-grow relative" style={{ height: "300px" }}>
      <ImagePizza src={pizza.imageUrl} alt={pizza.name} />
    </div>
    <div className="p-4">
      <TextPizzaTitle title={pizza.name} />
      <TextPizzaPrice price={pizza.price} />
      <ButtonChoose onClick={onChoose} />
    </div>
  </div>
);

export default PizzaCard;
