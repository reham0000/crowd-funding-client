import React, { useContext, useState } from "react";
import { Bounce } from "react-awesome-reveal";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import google from "../../assets/icons8-google-logo-48.png";
import Swal from "sweetalert2";

const SignIn = () => {
  const { handleGoogleLogin, handleSignin, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    handleSignin(email, password)
      .then((res) => {
        navigate(location.state.from);
        if (user) {
          Swal.fire({
            title: "Good job!",
            text: "Login Successful!",
            icon: "success",
          });
        }
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // const googleLogin = () => {
  //   handleGoogleLogin()
  //   .then(res => {
  //     navigate (location.state.from)
  //   })
  // }

  return (
    <>
      <Bounce>
        <div className="text-4xl font-semibold text-center bg-[#2ec4b6] p-3 w-96 mt-10 mx-auto rounded-3xl">
          LogIn
        </div>
      </Bounce>
      <Bounce>
        <div className="hero mt-16">
          <div className="card bg-base-100 w-96 h-96  shrink-0 shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <Link
                    to="/signup"
                    href="#"
                    className="label-text-alt link link-hover"
                  >
                    New in Website? Please{" "}
                    <span className="text-red-500">Register</span>
                  </Link>
                </label>
              </div>
              <div className="form-control ">
                <button className="btn btn-primary">Login</button>

                {error && <p className="text-red-500">{error}</p>}
              </div>
              <button
                onClick={handleGoogleLogin}
                className="bg-transparent  gap-5  mt-[-10px]"
              >
                <img className="w-10 mx-auto" src={google} alt="" />
              </button>
              {/* <button onClick={handleLogout}>logout</button> */}
            </form>
          </div>
        </div>
      </Bounce>
    </>
  );
};

export default SignIn;
