import { Outlet } from "react-router";
import Footer from "./components/Footer";
import Nav from "./components/Nav";

export default function Layout() {
  return (
    <div className="h-full transition-all duration-700 bg-gradient-to-b from-light-100 to-light-200 dark:bg-gradient-to-b dark:from-grey-dark-000 dark:to-grey-dark-100 
    dark:text-white">
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