import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/banner logo.jpg";
import "./Navbar.css";
import { Bounce } from "react-awesome-reveal";

const Navbar = () => {
  return (
    <>
      <div className="navbar bg-[#2ec4b6] px-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to="/">Home</NavLink>

              <NavLink to="/allcampaign">All Campaign</NavLink>

              <NavLink to="/newcampaign">New Campaign</NavLink>

              <NavLink to="/mycampaign">My Campaign</NavLink>

              <NavLink to="/mydonation">My Donations</NavLink>
            </ul>
          </div>
          <img className="w-24 rounded-full" src={logo} alt="" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex items-center gap-10 p-5">
            <Bounce>
              <NavLink to="/">Home</NavLink>

              <NavLink to="/allcampaign">All Campaign</NavLink>

              <NavLink to="/newcampaign">New Campaign</NavLink>

              <NavLink to="/mycampaign">My Campaign</NavLink>

              <NavLink to="/mydonation">My Donations</NavLink>
            </Bounce>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to='/signin'>
            <button className="btn">Login</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
