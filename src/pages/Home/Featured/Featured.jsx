import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-background bg-fixed text-white py-10 my-20">
      <SectionTitle
        subHeading="Check it Out"
        heading="Featured Item"></SectionTitle>

      <div className="md:flex justify-center items-center gap-10 px-36 py-32 bg-black bg-opacity-40">
        <div>
          <img className="rounded-lg" src={featuredImg} alt="" />
        </div>
        <div>
          <p>20 Aug, 2024</p>
          <p className="uppercase">Where can i get some ?</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione
            repellat quia nisi, neque unde doloribus maiores laborum! Mollitia,
            similique ab!
          </p>
          <button className="btn btn-outline border-0 border-b-4 text-white mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
