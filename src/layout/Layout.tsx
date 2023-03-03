import { Outlet } from "react-router";
import Nav from "./components/Nav";

export default function Layout() {
  return (
    <div className="bg-white transition duration-700 dark:bg-grey-dark dark:text-white w-screen h-screen">
      <div className="container mx-auto py-4 h-full w-full grid grid-rows-3">
        <Nav />

        <main className="my-auto">
          <Outlet />
        </main>

        <footer>
          <a href="https://github.com/jmorton95">Github</a>
          <a href="https://github.com/jmorton95/portfolio">Source Code</a>
        </footer>
      </div>
    </div>
  );
}