import React from "react";
import useCart from "../../../hooks/useCart";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt } from "react-icons/fa";

const MyCart = () => {
  const [cart, , isLoading] = useCart();
  const total = cart.reduce((sum, item) => item.price + sum, 0);

  if (isLoading) {
    return "Loading...";
  }

  return (
    <div>
      <Helmet>
        <title>bistro | My Cart</title>
      </Helmet>
      <div className="uppercase flex items-center justify-between text-lg font-semibold mb-5">
        <h3>Total Items : {cart.length}</h3>
        <h3>Total Price : ${total}</h3>
        <button className="btn btn-sm btn-warning">PAY</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Food</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={item.image} alt={item.name} />
                      </div>
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <th>
                  <button className="btn btn-ghost btn-md bg-red-500 text-white">
                    <FaTrashAlt></FaTrashAlt>
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
