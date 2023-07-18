import { Pizza, PizzaCount } from "../../../types";
import ButtonBasket from "../../atoms/ButtonBasket/ButtonBasket";
import { Basket } from "../Basket/Basket";

const SITE_TITLE = "Pizza Perfect";

interface HeaderProps {
  basketItems: PizzaCount[];
  handleRemoveItem: (index: string) => void;
  handleAddItem: (pizza: Pizza) => void;
  totalAmount: number;
  isBasketOpen: boolean;
  handleBasketButtonClick: () => void;
}

const Header = ({
  basketItems,
  totalAmount,
  handleRemoveItem,
  handleAddItem,
  isBasketOpen,
  handleBasketButtonClick,
}: HeaderProps) => {
  const renderBasket = () => {
    if (!isBasketOpen) return null;

    return (
      <Basket
        itemsInBasket={basketItems}
        removeItemFromBasket={handleRemoveItem}
        addItemFromBasket={handleAddItem}
        totalAmount={totalAmount}
      />
    );
  };

  return (
    <header className="flex justify-between items-center py-4">
      <h1 className="text-3xl font-bold">{SITE_TITLE}</h1>
      <div className="basket relative">
        <ButtonBasket
          count={basketItems.length}
          onClick={handleBasketButtonClick}
        />
        {renderBasket()}
      </div>
    </header>
  );
};

export default Header;
