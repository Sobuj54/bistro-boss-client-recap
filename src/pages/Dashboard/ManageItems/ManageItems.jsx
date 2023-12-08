import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";

const ManageItems = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Admin | Manage Items</title>
      </Helmet>

      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry Up!"></SectionTitle>
    </div>
  );
};

export default ManageItems;
