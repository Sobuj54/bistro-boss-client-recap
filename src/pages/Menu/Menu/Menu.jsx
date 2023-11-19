import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();

  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  const desserts = menu.filter((item) => item.category === "dessert");

  return (
    <div>
      <Helmet>
        <title>Bistro | Our Menu</title>
      </Helmet>
      <Cover img={menuImg} title="Our menu"></Cover>

      {/* todays offer */}
      <SectionTitle
        subHeading="Don't Miss"
        heading="Today's Offer"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

      {/* dessert */}
      <MenuCategory
        items={desserts}
        title="Dessert"
        img={dessertImg}></MenuCategory>

      {/* pizza */}
      <MenuCategory items={pizza} title="Pizza" img={pizzaImg}></MenuCategory>
      <MenuCategory items={soup} title="Soup" img={soupImg}></MenuCategory>
      <MenuCategory items={salad} title="Salad" img={saladImg}></MenuCategory>
    </div>
  );
};

export default Menu;
