import { Outlet } from "react-router";

export default function Layout() {
  return (
    <>
      <nav>Nav</nav>
      <Outlet />
      <footer>Footer</footer>
    </>
    
  )
};
