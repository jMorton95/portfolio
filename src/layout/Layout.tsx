import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Layout() {
  return (
    <div className="bg-white transition duration-700 dark:bg-grey-dark dark:text-white">
      <div className="main-container py-4">
        <Nav />
        <main className="my-auto container mx-auto">
          <Outlet />
        </main>
       <Footer />
      </div>
    </div>
  );
}