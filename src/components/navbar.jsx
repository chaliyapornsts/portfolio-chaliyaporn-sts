import { useState } from "react";
import images from "../components/image";
import Contact from "./contactpage";

const navbar = [
    {
        name: "Home",
        href: "#home",
    },
    {
        name: "About",
        href: "#about",
    },
    {
        name: "Projects",
        href: "#projects",
    },
];

const menus = [
    {
        menu: images.IconMenu,
        alt: "Menu Icon"
    }
];

const closes = [
    {
        close: images.IconClose,
        alt: "Close Icon"
    }
];

const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className="flex fixed bg-gray-800 w-full h-28 z-10">
            <nav className="flex flex-col justify-between lg:flex-row items-start lg:items-center mx-8 text-white py-8">
                <div className="flex w-full justify-between">
                    <div className="flex fixed top-8 mr-auto">
                        <a href="#home">
                            <img
                                className="h-12 w-auto"
                                src={images.IconDark}
                                alt="icon dark"
                                height={12}
                                width={245}
                            />
                        </a>
                    </div>
                    <div className="flex justify-center">
                        <button onClick={toggleMenu}>
                            {isMenuOpen ? (
                                closes.map((closenav, index) => (
                                    <div
                                        key={index}
                                        className="fixed top-9 right-10 z-10 cursor-pointer lg:hidden text-white border border-gray-400 rounded-md">
                                        <img className="w-10 h-10"
                                            src={closenav.close}
                                            alt={closenav.alt} />
                                    </div>
                                ))
                            ) : (
                                menus.map((menunav, index) => (
                                    <div
                                        key={index}
                                        className="fixed top-9 right-10 cursor-pointer lg:hidden text-white border border-gray-400 rounded-md">
                                        <img className="w-10 h-10"
                                            src={menunav.menu}
                                            alt={menunav.alt} />
                                    </div>
                                ))
                            )}
                        </button>
                    </div>
                </div>

                {/* Desktop Menu */}
                <ul className="fixed right-0 top-9 lg:flex-row gap-10 items-start lg:items-center font-semibold sm:px-6 hidden lg:flex">
                    {navbar.map((item, index) => (
                        <li key={index}>
                            <a href={item.href} className="hover:text-gray-400">{item.name}</a>
                        </li>
                    ))}
                    <Contact />
                </ul>

                {/* Mobile Menu */}
                {!isMenuOpen ? (
                    <ul className="flex fixed top-[-400px] right-0 flex-col lg:flex-row gap-10 items-start font-semibold bg-gray-900 my-4 pt-5 pb-6 px-5 lg:hidden w-full transition-all duration-500 ease-in">
                        {navbar.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="hover:text-gray-400">{item.name}</a>
                            </li>
                        ))}
                        <Contact />
                    </ul>
                ) : (
                    <ul className="flex fixed -top-5 right-0 flex-col lg:flex-row gap-10 items-start font-semibold bg-gray-900 my-4 pt-24 pb-10 px-10 lg:hidden w-full transition-all duration-500 ease-in drop-shadow-2xl">
                        {navbar.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className="hover:text-gray-400">{item.name}</a>
                            </li>
                        ))}
                        <Contact />
                    </ul>
                )}
            </nav>
        </div>
    );
}

export default NavBar;
