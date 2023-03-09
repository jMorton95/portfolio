import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {toggleTheme } from "../../services/ThemeService";

export default function Nav() {

  useEffect(() => {
    document.getElementById("themeToggle")?.classList.add(localStorage.theme);
  })

  return (
    <nav className="container mx-auto flex flex-row justify-between">
      <div className="hidden md:block">Joshua Morton</div>
      <ul className="flex gap-6 max-h-fit">
        <li>
          <NavLink to="/">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/about-me">About Me</NavLink>
        </li>
      </ul>
      <button
        id="themeToggle"
        title="Toggle Theme"
        className="themeToggleBtn self-start border-2 rounded-full h-10 w-10 border-grey-dark-100 dark:border-white"
        type="button"
        onClick={(e) => toggleTheme(document.body, e)}
      >
        <span className="h-full block duration-2000 rounded-full w-full border-r-12 dark:border-r-4 border-grey-dark-100 dark:border-white"></span>
      </button>
    </nav>
  )
};
