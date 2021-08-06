import { useContext } from "react";
import { StepsContext } from "../contexts/StepsContext";


export function useSteps() {
  const value = useContext(StepsContext);

  return value;
}