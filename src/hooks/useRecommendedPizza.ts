import { useContext } from "react";
import { RecommendedPizzaContext } from "../contexts/RecommendedPizzaContext";


export function useRecommendedPizza() {
  const value = useContext(RecommendedPizzaContext);

  return value;
}