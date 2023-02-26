import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <nav className="">Nav</nav>
      <Outlet />
      <footer>Footer</footer>
    </>
    
  )
};
