import React, { useContext } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";
import { AuthProvider } from "../../../Context/AuthContext";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Helmet } from "react-helmet-async";

const PaymentHistory = () => {
  const { user } = useContext(AuthProvider);
  const [axiosSecure] = useAxiosSecure();

  const { data: transactionDetails = [] } = useQuery({
    queryKey: ["transactions", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/payments/transactions?email=${user.email}`
      );
      return res.data;
    },
  });

  return (
    <div className="w-full">
      <Helmet>
        <title>Bistro | Payment History</title>
      </Helmet>
      <SectionTitle
        heading="Payment History"
        subHeading="All of Your"></SectionTitle>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Email</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {transactionDetails.map((transaction, index) => (
              <tr key={transaction._id}>
                <th>{index + 1}</th>
                <td>{transaction?.email}</td>
                <td>{transaction?.quantity}</td>
                <td>$ {transaction?.price}</td>
                <td>{transaction?.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
