import { FC } from "react";
import { Pizza } from "../../../types";
import PizzaCard from "../../molecules/PizzaCard/PizzaCard";

interface PizzaListProps {
  availablePizzas: Pizza[];
  choosePizza: (pizza: Pizza) => void;
}

export const PizzaList: FC<PizzaListProps> = ({
  availablePizzas,
  choosePizza,
}) => (
  <section className="pizza-cards grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
    {availablePizzas.map((pizza) => (
      <PizzaCard
        key={pizza.id}
        pizza={pizza}
        onChoose={() => choosePizza(pizza)}
      />
    ))}
  </section>
);
