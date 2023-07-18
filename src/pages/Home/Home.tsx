import { useState } from "react";
import pizzasData from "../../__mocks__/data/pizzas.json";
import toppingsData from "../../__mocks__/data/toppings.json";
import sizeData from "../../__mocks__/data/sizes.json";
import Banner from "../../components/molecules/Banner/Banner";
import Header from "../../components/organisms/Header/Header";
import { PizzaList } from "../../components/organisms/PizzaList/PizzaList";
import { useBasketStore } from "../../stores/basket";
import { Pizza, Size, Topping } from "../../types";
import PizzaModal from "../../components/organisms/PizzaModal/PizzaModal";

const Home = () => {
  // Defining all the constants
  const pizzas: Pizza[] = pizzasData;
  const toppings: Topping[] = toppingsData;
  const sizes: Size[] = sizeData;

  // Using the useState hook for managing state
  const [isBasketOpen, setIsBasketOpen] = useState(false);
  const [isPizzaModalOpen, setIsPizzaModalOpen] = useState(false);
  const [selectedPizza, setSelectedPizza] = useState<Pizza | null>(null);

  // Using the useBasketStore hook for managing basket items
  const {
    items: basketItems,
    total,
    addItemToBasket,
    removeItemFromBasket,
  } = useBasketStore();

  // Handler for removing an item
  const handleRemoveItem = (id: string) => {
    removeItemFromBasket(id);
  };

  // Toggles the state of the basket
  const toggleBasketOpen = () => {
    setIsBasketOpen((prevState) => !prevState);
  };

  // Handler for closing the pizza modal
  const closePizzaModal = () => {
    setIsPizzaModalOpen(false);
  };

  // Handler for choosing a pizza
  const selectPizza = (pizza: Pizza) => {
    setSelectedPizza(pizza);
    setIsPizzaModalOpen(true);
  };

  // Handler for adding an item to the basket
  const addToBasket = (toppings: Topping[], size: Size) => {
    if (selectedPizza !== null) {
      closePizzaModal();
      setIsBasketOpen(true);
      addItemToBasket({
        ...selectedPizza,
        toppings,
        size,
      });
    }
  };

  // Handler for adding to an existing basket item
  const addToExistingBasketItem = (pizza: Pizza) => {
    addItemToBasket(pizza);
  };

  return (
    <>
      {isPizzaModalOpen && selectedPizza && (
        <PizzaModal
          onClose={closePizzaModal}
          pizza={selectedPizza}
          toppings={toppings}
          sizes={sizes}
          onAddToBasket={addToBasket}
        />
      )}
      <div className="container mx-auto px-6 bg-gray-default text-primary">
        <Header
          isBasketOpen={isBasketOpen}
          basketItems={basketItems}
          handleBasketButtonClick={toggleBasketOpen}
          handleAddItem={addToExistingBasketItem}
          handleRemoveItem={handleRemoveItem}
          totalAmount={total}
        />
        <Banner />
        <PizzaList availablePizzas={pizzas} choosePizza={selectPizza} />
      </div>
    </>
  );
};

export default Home;
