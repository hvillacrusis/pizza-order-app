export const useBasketStore = jest.fn().mockReturnValue({
  items: [],
  total: 0,
  addItemToBasket: jest.fn(),
  removeItemFromBasket: jest.fn(),
});
