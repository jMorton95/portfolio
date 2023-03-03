import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Layout() {
  return (
    <div className="h-full bg-white transition duration-700 dark:bg-grey-dark dark:text-white">
      <div className="main-container pt-6 pb-4">
        <Nav />
        <main className="container mx-auto">
          <Outlet />
        </main>
       <Footer />
      </div>
    </div>
  );
}