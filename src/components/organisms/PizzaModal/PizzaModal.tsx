import { ChangeEvent, FC, useState } from "react";
import { Pizza, Size, Topping } from "../../../types";
import Label from "../../atoms/Label/Label";
import ModalButton from "../../atoms/ModalButton/ModalButton";
import ModalHeading from "../../atoms/ModalHeading/ModalHeading";
import Option from "../../atoms/Option/Option";

interface PizzaModalProps {
  toppings: Topping[];
  sizes: Size[];
  onClose: () => void;
  onAddToBasket: (toppings: Topping[], size: Size) => void;
  pizza: Pizza;
}

const PizzaModal: FC<PizzaModalProps> = ({
  toppings,
  sizes,
  onClose,
  onAddToBasket,
  pizza,
}) => {
  const [selectedToppings, setSelectedToppings] = useState<Topping[]>([]);
  const [selectedSize, setSelectedSize] = useState<Size>({
    id: "size-2",
    name: "Medium",
  });

  const handleToppingChange = (
    topping: Topping,
    e: ChangeEvent<HTMLInputElement>
  ) => {
    if (e.target.checked) {
      setSelectedToppings((prev) => [...prev, topping]);
    } else {
      setSelectedToppings((prev) =>
        prev.filter((selectedTopping) => selectedTopping.id !== topping.id)
      );
    }
  };

  const handleSizeChange = (size: Size) => {
    setSelectedSize(size);
  };

  return (
    <div className="z-50 fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center min-h-screen min-w-full">
      <div className="bg-white rounded-lg shadow-md w-full max-w-3xl mx-4 p-6">
        <ModalHeading text={pizza.name} size="2xl" />
        <Label text={`$${pizza.price.toString()}`} />

        <ModalHeading text="Customize your pizza" size="lg" />
        <ModalHeading text="Toppings:" size="lg" />
        {toppings.map((topping) => (
          <Option
            key={topping.id}
            label={topping.name}
            type="checkbox"
            onChange={(e) => handleToppingChange(topping, e)}
            checked={selectedToppings.some((t) => t.id === topping.id)}
          />
        ))}

        <ModalHeading text="Sizes:" size="lg" />
        {sizes.map((size) => (
          <Option
            key={size.id}
            label={size.name}
            value={size.id}
            checked={selectedSize.id === size.id}
            type="radio"
            onChange={() => handleSizeChange(size)}
          />
        ))}

        <div className="flex justify-between mt-6">
          <ModalButton
            text="Add to Basket"
            color="green"
            onClick={() => onAddToBasket(selectedToppings, selectedSize)}
          />
          <ModalButton text="Close" color="red" onClick={onClose} />
        </div>
      </div>
    </div>
  );
};

export default PizzaModal;
