import { useContext } from "react";
import { FetchContext } from "../contexts/FetchContext";

export const useFetch = () => {

    const context = useContext(FetchContext);

    if (context === undefined) {
      throw new Error("Context must be used within a Provider");
    }
    return context;
  }