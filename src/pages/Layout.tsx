import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="">
        <div>Josh M Portfolio -- Under Construction</div>
        <NavLink to="/">Projects</NavLink>
        <NavLink to="/about-me">About Me</NavLink>
      </nav>
      <Outlet />
      <footer></footer>
    </>
    
  )
};
