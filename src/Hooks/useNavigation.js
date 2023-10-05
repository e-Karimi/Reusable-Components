import { useContext } from "react";
import { NavigationContext } from "../Context/navigation";

export default function useNavigation() {

  return useContext(NavigationContext)
}



