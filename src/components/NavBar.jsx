import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [user, setUser] = useState("Fernando Carrasco");
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const pages = ["Dashboard", "Reports", "Messages", "Freelancers", "Jobs"];
  return (
    <nav className="fixed top-0 flex items-center justify-between h-12 px-8 gap-2 w-full bg-white text-sm border-b-2">
      <section className="flex items-center justify-between gap-2 md:gap-8">
        <i
          onClick={() => setActiveMobileMenu((prev) => !prev)}
          className="bi bi-list text-2xl cursor-pointer hover:opacity-80 sm:hidden"
        />
        <span className="main-logo hidden sm:block" />
        <section className="hidden sm:flex justify-between gap-2 md:gap-8 font-medium">
          {pages?.map((page) => (
            <NavLink
              key={page}
              to={`/${page.toLowerCase()}`}
              className="main-color-hover py-3 border-t-4 border-white"
            >
              {page}
            </NavLink>
          ))}
        </section>
      </section>
      <section className="flex items-center gap-5">
        <span className="main-logo block sm:hidden" />
        <div className="opacity-50">
          <label
            htmlFor="search"
            className="absolute py-1 px-2 bi bi-search text-gray-600 cursor-pointer"
          />
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search"
            className="bg-color py-1 pl-8 pr-2 rounded-md w-24 md:w-40"
          />
        </div>
        <div className="flex items-center gap-3 px-3 border-x-2 cursor-pointer main-color-hover">
          <div className="flex justify-center items-center text-white text-base bg-main-color h-7 w-7 rounded-full">
            {user[0]}
          </div>
          <p className="font-medium hidden md:block">{user}</p>
        </div>
        <i className="bi bi-box-arrow-right bg-color py-1 px-2 rounded-md cursor-pointer hover:opacity-80"></i>
      </section>
      {activeMobileMenu && (
        <menu className="absolute left-0 top-12 flex flex-col bg-white sm:hidden rounded-md border-2">
          {" "}
          {pages?.map((page) => (
            <NavLink
              key={page}
              to={`/${page.toLowerCase()}`}
              className="main-color-hover py-2 px-6 border-t-4 border-white"
            >
              {page}
            </NavLink>
          ))}
        </menu>
      )}
    </nav>
  );
};

export { NavBar };
