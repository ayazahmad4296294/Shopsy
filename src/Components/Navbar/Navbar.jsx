import React, { useState, useEffect } from "react";
import Logo from "../../assets/logo.png";
import DarkMode from "./DarkMode";
// Icons
import { CiSearch } from "react-icons/ci";
import { FaCaretDown, FaCartShopping } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { fetchCategories } from "../../Api";
import { HiMenuAlt3, HiMenuAlt1 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = ({ handleOrderPopup }) => {
    const [categories, setCategories] = useState([]);
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    useEffect(() => {
        const getCategories = async () => {
            const data = await fetchCategories();
            setCategories(data);
        };
        getCategories();
    }, []);

    const Menu = [
        {
            id: 1,
            name: "Home",
            link: "/",
        },
        {
            id: 2,
            name: "All Products",
            link: "/products",
        },
        // Real Category Links
        ...categories.map((cat, index) => ({
            id: index + 3,
            name: cat.charAt(0).toUpperCase() + cat.slice(1),
            link: `/products/category/${cat}`,
        })),
    ];

    const DropdownLinks = [
        {
            id: 1,
            name: "Trending Products",
            link: "/#",
        },
        {
            id: 2,
            name: "Best Selling",
            link: "/#",
        },
        {
            id: 3,
            name: "Top Rated",
            link: "/#",
        },
    ];

    return (
        <div className="shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
            {/* Upper Navbar */}
            <div className="bg-primary/40 py-2">
                <div className="container flex justify-between items-center">
                    <div>
                        <Link to="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
                            <img src={Logo} alt="Logo" className="w-10" />
                            Shopsy
                        </Link>
                    </div>

                    {/* search bar */}
                    <div className="flex justify-between items-center gap-4">
                        <div className="relative group hidden sm:block">
                            <input
                                type="text"
                                placeholder="search"
                                className="w-52 sm:w-52 group-hover:w-72 transition-all duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border focus:border-primary dark:border-gray-500 dark:bg-gray-800"
                            />
                            <CiSearch className="text-gray-500 group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3" />
                        </div>

                        {/* order button */}
                        <button
                            onClick={() => handleOrderPopup()}
                            className="bg-gradient-to-r from-primary to-secondary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group"
                        >
                            <span className="group-hover:block hidden transition-all duration-200">
                                Order
                            </span>
                            <FaCartShopping className="text-xl text-white drop-shadow-sm cursor-pointer" />
                        </button>

                        {/* Darkmode Switch */}
                        <div>
                            {/* <DarkMode /> */}
                        </div>

                        {/* Mobile Menu Hammer */}
                        <div className="flex items-center sm:hidden text-primary">
                            {showMenu ? (
                                <HiMenuAlt1
                                    onClick={toggleMenu}
                                    className="cursor-pointer transition-all"
                                    size={30}
                                />
                            ) : (
                                <HiMenuAlt3
                                    onClick={toggleMenu}
                                    className="cursor-pointer transition-all"
                                    size={30}
                                />
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Responsive Menu */}
            <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} Menu={Menu} />

            {/* Lower Navbar */}
            <div className="flex justify-center py-2">
                <ul className="sm:flex hidden items-center gap-4">
                    {Menu.map((data) => (
                        <li key={data.id}>
                            <Link
                                to={data.link}
                                className="inline-block px-4 hover:text-primary transition-all duration-200">
                                {data.name}
                            </Link>
                        </li>
                    ))}
                    {/* Simple Dropdown and Links */}
                    <li className="group relative cursor-pointer">
                        <a href="#" className="flex items-center gap-[2px]">
                            Trending Products
                            <span>
                                <FaCaretDown
                                    className="transition-all duration-200 group-hover:rotate-180"
                                />
                            </span>
                        </a>
                        <div className="absolute z-[9999] hidden group-hover:block rounded-md w-[180px] top-full left-0 p-1 bg-white text-black dark:bg-gray-900 dark:text-white shadow-md">
                            <ul>
                                {DropdownLinks.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.link} className="inline-block px-4 hover:text-primary transition-all duration-200">
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
