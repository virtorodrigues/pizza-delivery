import { useContext } from "react";
import { UserScoreContext } from "../contexts/UserScoreContext";


export function useUserScore() {
  const value = useContext(UserScoreContext);

  return value;
}