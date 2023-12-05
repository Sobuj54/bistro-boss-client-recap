import React from "react";
import {
  FaBook,
  FaCalendar,
  FaHamburger,
  FaHome,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
  FaWallet,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  console.log("isAdmin", isAdmin);
  // const isAdmin = true;

  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden">
            Open drawer
          </label>
        </div>
        <div className="drawer-side bg-[#D1A054]">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full text-base-content">
            {/* Sidebar content here */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addItem">
                    <FaUtensils></FaUtensils> Add an Item
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaWallet></FaWallet> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaBook></FaBook> Manage Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/allUsers">
                    <FaUsers></FaUsers> All Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/home">
                    <FaHome></FaHome> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation">
                    <FaCalendar></FaCalendar> Reservations
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/history">
                    <FaWallet></FaWallet> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myCart">
                    <FaShoppingCart></FaShoppingCart> My Cart
                    <span className="badge badge-secondary">
                      +{cart?.length || 0}
                    </span>
                  </NavLink>
                </li>
              </>
            )}

            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu">
                <FaHamburger></FaHamburger> Menu
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
