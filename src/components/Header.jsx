import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <header className="bg-gray-800">
            <nav className="container mx-auto flex items-center justify-between p-4">
                <div className="flex items-center">
                    <h1 className="text-white text-lg font-bold">My Website</h1>
                </div>
                <div className="md:hidden">
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19 12H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0-7H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2zm0 14H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <div className={`md:flex ${isOpen ? 'block' : 'hidden'}`}>
                    <ul className="md:flex items-center">
                        <li className="mr-4">
                            <Link to="/" className="text-white hover:text-gray-300">
                                Home
                            </Link>
                        </li>
                        <li className="mr-4">
                            <Link to="/about" className="text-white hover:text-gray-300">
                                About
                            </Link>
                        </li>
                        {/* <li className="mr-4">
                            <a className="text-white hover:text-gray-300" href="#services">
                                Services
                            </a>
                        </li>
                        <li className="mr-4">
                            <a className="text-white hover:text-gray-300" href="#contact">
                                Contact
                            </a>
                        </li> */}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Header;
