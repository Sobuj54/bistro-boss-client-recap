import React, { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthProvider } from "../../Context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = ({ text }) => {
  const { googleLogin } = useContext(AuthProvider);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location?.state?.from?.pathname || "/";

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        const userInfo = { name: user.displayName, email: user.email };
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userInfo),
        })
          .then((res) => res.json())
          .then(() => {
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="mb-4">
      <div className="divider"></div>
      <div className="flex justify-center items-center">
        <button onClick={handleGoogleLogin} className="btn btn-outline">
          <FaGoogle></FaGoogle> Google {text}
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
