import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav className="h-[10vh] w-full flex items-center justify-between ">
            <img
                className="h-[13vh]"
                src="https://imgs.search.brave.com/GVQpOEyd7K4f9mkVZm_hB8MJSRSL1gYoIyWk6DkFn98/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAzLzYwLzc2LzUz/LzM2MF9GXzM2MDc2/NTM4OV9VaE1CSTJB/elVnTnp6T1dQbDky/QUtJM053VHFjMkNM/Ti5qcGc"
                alt=""
            />
            <div className="flex gap-x-10 text-md items-center">
                <Link className="hover:text-green-600 duration-200" to="/">
                    Home
                </Link>
                <Link
                    className="hover:text-green-600 duration-200"
                    to="/recipes"
                >
                    Recipes
                </Link>
                <Link className="hover:text-green-600 duration-200" to="/about">
                    About
                </Link>
                <Link
                    className="hover:text-green-600 duration-200"
                    to="/contact"
                >
                    Contact
                </Link>
            </div>
            <i className="text-3xl ri-grid-fill text-green-600"></i>
        </nav>
    );
};

export default Nav;