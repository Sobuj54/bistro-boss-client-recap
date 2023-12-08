import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const useMenu = () => {
  // const [menu, setMenu] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //     });
  // }, []);
  // doing the same thing using tanstack query

  const { data: menu = [] } = useQuery({
    queryKey: ["menu"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/menu");
      return res.json();
    },
  });

  return [menu];
};

export default useMenu;
