import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { toggleTheme } from "../services/ThemeService";

export default function Layout() {

  return (
    <div className="dark:bg-grey-dark dark:text-white w-screen h-screen">

      <div className="container mx-auto py-4 h-full w-full grid grid-rows-3">

        <nav className="flex flex-row justify-between">
          <div className="">
            Joshua Morton
          </div>
          <div className="flex gap-6">
            <NavLink to="/">Projects</NavLink>
            <NavLink to="/about-me">About Me</NavLink>
          </div>
          <button title="Toggle Theme" className="themeToggleBtn self-start" type="button" onClick={(e) => toggleTheme(document.body, e)}>
            <div className="border h-8 w-8 border-grey-dark dark:border-emerald-50"></div>
          </button>
        </nav>
        
        <section className="my-auto">
        <Outlet />  
        </section>
        

        <footer>
          <a href="https://github.com/jmorton95">Github</a>
          <a href="https://github.com/jmorton95/portfolio">Source Code</a>
        </footer>

      </div>
      
    </div>
    
  )
};
