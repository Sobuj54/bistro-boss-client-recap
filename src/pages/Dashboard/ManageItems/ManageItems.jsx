import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import useMenu from "../../../hooks/useMenu";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const [axiosSecure] = useAxiosSecure();

  const handleDeleteItem = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/menu/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Item has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="w-full">
      <Helmet>
        <title>Admin | Manage Items</title>
      </Helmet>

      <SectionTitle
        heading="Manage All Items"
        subHeading="Hurry Up!"></SectionTitle>

      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={item?.image} alt={item?.name} />
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td>{item?.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
                <th>
                  <button
                    onClick={() => handleDeleteItem(item._id)}
                    className="btn btn-ghost btn-md bg-red-500 text-white">
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

export default ManageItems;
