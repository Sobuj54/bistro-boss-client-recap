import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthProvider } from "../../Context/AuthContext";

const SignUp = () => {
  const { handleSubmit, register, reset } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthProvider);

  const onSubmit = (data) => {
    const { name, email, password } = data;
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;

        updateUserProfile(name)
          .then(() => {
            // console.log("profile updated");
            reset();
          })
          .catch((error) => console.log(error));

        // console.log(loggedUser);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="text-center w-full md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card w-full md:w-1/2 shadow-2xl bg-base-100">
          {/* form */}
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name")}
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email")}
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password")}
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign up"
                className="btn btn-primary"
              />
            </div>
            <p className="text-center mt-2">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-500">
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
