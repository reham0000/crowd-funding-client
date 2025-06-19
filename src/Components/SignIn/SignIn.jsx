import { useContext, useState } from "react";
import { Bounce } from "react-awesome-reveal";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import google from "../../assets/icons8-google-logo-48.png";
import Swal from "sweetalert2";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase/firebase.config";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignIn = () => {
  const { handleSignin, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    const email = e.target.email.value;
    const password = e.target.password.value;

    handleSignin(email, password)
      .then((res) => {
        if (res.user) {
          Swal.fire({
            title: "Login Successful!",
            text: "You have been logged in successfully",
            icon: "success",
          });
          navigate(location.state?.from || "/");
        }
      })
      .catch((error) => {
        let errorMessage = "Login failed. Please try again.";
        
        if (error.code === 'auth/invalid-credential') {
          errorMessage = "Invalid email or password";
        } else if (error.code === 'auth/user-not-found') {
          errorMessage = "No account found with this email";
        } else if (error.code === 'auth/wrong-password') {
          errorMessage = "Incorrect password";
        } else if (error.code === 'auth/too-many-requests') {
          errorMessage = "Too many attempts. Account temporarily locked.";
        }
        
        setError(errorMessage);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleGoogleLogin = async () => {
    try {
      setIsLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      navigate(location.state?.from || "/");
    } catch (error) {
      setError("Google login failed. Please try again.");
      console.error("Google login error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Bounce>
        <div className="text-4xl font-semibold text-center bg-[#2ec4b6] p-3 w-96 mt-10 mx-auto rounded-3xl">
          LogIn
        </div>
      </Bounce>
      <Bounce>
        <div className="hero mt-16">
          <div className="card bg-base-100 w-96 max-w-md shadow-2xl">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered"
                  required
                  autoComplete="username"
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="relative">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="input input-bordered w-full"
                    required
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={togglePasswordVisibility}
                    className="absolute right-3 top-3 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <label className="label">
                  <Link
                    to="/signup"
                    className="label-text-alt link link-hover"
                  >
                    New to Website? <span className="text-primary">Register</span>
                  </Link>
                  
                </label>
              </div>
              
              <div className="form-control mt-4">
                <button 
                  className={`btn btn-primary ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? 'Logging in...' : 'Login'}
                </button>
              </div>
              
              {error && (
                <div className="alert alert-error mt-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{error}</span>
                </div>
              )}
              
              <div className="divider">OR</div>
              
              <button
                type="button"
                onClick={handleGoogleLogin}
                disabled={isLoading}
                className="btn btn-outline gap-2"
              >
                <img className="w-6" src={google} alt="Google logo" />
                Continue with Google
              </button>
            </form>
          </div>
        </div>
      </Bounce>
    </>
  );
};

export default SignIn;