import  { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Bounce } from "react-awesome-reveal";

const SignUp = () => {
  const { createUser, manageProfile } = useContext(AuthContext);
  const [error, setError] = useState('')

  const location = useLocation();
  const navigate = useNavigate();
 

  const handleSignUp = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const password = e.target.password.value;
    

    if(password.length < 6){
        setError('Password must contain at least six character')
        return;
    }
    if(!/[a-z]/.test(password)){
        setError('Password must contain at least one lowercase letter')
        return;
    }
    if(!/[A-Z]/.test(password)){
        setError('Password must contain at least one uppercase letter')
        return;
    }
    

    createUser(email, password)
    .then(result => {
      navigate(location.state?.from || '/');
        manageProfile(name, photo)

        const newUser = {name, email, photo}
        fetch('https://crowd-funding-server-kx73.vercel.app/users',{
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => console.log('user created', data))

        Swal.fire({
            title: "Good job!",
            text: "Register Successful!",
            icon: "success"
          });
    })
    .catch(error => {
        // console.log('error', error);
    })
  };

  return (
    <>
    <Bounce>
        <div className="text-4xl font-semibold text-center bg-[#2ec4b6] p-3 w-96 mt-10 mx-auto rounded-3xl">
          Register
        </div>
      </Bounce>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="card bg-base-100 w-96 mt-16 shrink-0 shadow-2xl">
            <form onSubmit={handleSignUp} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                name="name"
                  type="Name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
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
                <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo-URL</span>
                </label>
                <input
                name="photo"
                  type="photo"
                  placeholder="photo-url"
                  className="input input-bordered"
                  required
                />
              </div>
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
                  <Link to='/signin' href="#" className="label-text-alt link link-hover">
                    Alreadu have an account? please <span className="text-red-500">Login</span>
                  </Link>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">SignUp</button>
              </div>
            </form>
            {error && <p className="text-red-500">{error}</p>}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
