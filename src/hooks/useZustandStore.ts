import { useBasketStore } from "../stores/basket";

export const useZustandStore = () => {
  const basketStore = useBasketStore();
  return { ...basketStore };
};
