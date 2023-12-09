import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Payment = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro | Payment</title>
      </Helmet>
      <SectionTitle
        subHeading="Please process"
        heading="Payment"></SectionTitle>
      Payment
    </div>
  );
};

export default Payment;
