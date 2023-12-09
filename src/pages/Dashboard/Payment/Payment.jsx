import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_payment_pk);

const Payment = () => {
  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro | Payment</title>
      </Helmet>
      <SectionTitle
        subHeading="Please process"
        heading="Payment"></SectionTitle>

      <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
      </Elements>
    </div>
  );
};

export default Payment;
