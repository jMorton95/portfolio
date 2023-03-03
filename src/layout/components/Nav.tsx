import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {toggleTheme } from "../../services/ThemeService";

export default function Nav() {

  useEffect(() => {
    document.getElementById("themeToggle")?.classList.add(localStorage.theme);
  })

  return (
    <nav className="flex flex-row justify-between">
          <div className="hidden md:block">Joshua Morton</div>
          <div className="flex gap-6">
            <NavLink to="/">Projects</NavLink>
            <NavLink to="/about-me">About Me</NavLink>
          </div>
          <button
            id="themeToggle"
            title="Toggle Theme"
            className="themeToggleBtn self-start border rounded-full h-10 w-10 border-grey-dark dark:border-emerald-50"
            type="button"
            onClick={(e) => toggleTheme(document.body, e)}
          >
            <span className="h-full block duration-2000 rounded-full w-full border-r-12 dark:border-r-4 border-grey-dark dark:border-emerald-50"></span>
          </button>
        </nav>
  )
};
