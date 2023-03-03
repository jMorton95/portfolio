import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

export default function Layout() {

  function toggleTheme() {
    const body = document.body;
    (body.classList.contains("dark")) ? body.classList.remove("dark") : body.classList.add("dark");
  }

  return (
    <div className="dark:bg-grey-dark dark:text-white w-screen h-screen">
      <nav className="">
        <NavLink to="/">Projects</NavLink>
        <NavLink to="/about-me">About Me</NavLink>
        <button type="button" onClick={toggleTheme}>Toggle Theme</button>
      </nav>
      
      <Outlet />

      <footer>
        <a href="https://github.com/jmorton95">Github</a>
        <a href="https://github.com/jmorton95/portfolio">Source Code</a>
      </footer>
    </div>
    
  )
};
