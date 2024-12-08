import React from "react";
import { Bounce } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const SignIn = () => {
  return (
    <>
      <Bounce>
      <div className="text-4xl font-semibold text-center bg-[#2ec4b6] p-3 w-96 mt-10 mx-auto rounded-3xl">LogIn</div>
      </Bounce>
      <Bounce>
      <div className="hero mt-16">
        <div className="card bg-base-100 w-96 h-96  shrink-0 shadow-2xl">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
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
                  Register
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
      </Bounce>
    </>
  );
};

export default SignIn;
