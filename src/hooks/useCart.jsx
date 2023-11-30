import { useContext } from "react";
import { AuthProvider } from "../Context/AuthContext";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user } = useContext(AuthProvider);

  const { data: cart = [], isLoading } = useQuery({
    queryKey: ["cart", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/carts?email=${user?.email}`
      );
      return res.json();
    },
  });

  return [cart, isLoading];
};

export default useCart;
