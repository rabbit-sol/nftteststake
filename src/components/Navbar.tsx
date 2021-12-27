import React, { useState } from "react";
import { Link } from "react-scroll";

import { RiMenu3Fill } from "react-icons/ri";
import { FaTimes } from "react-icons/fa";
import { BsDiscord, BsTwitter } from "react-icons/bs";

import { MintButton } from "../components/Buttons/Buttons";

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(false);

    const handleButtonClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        // navbar
        <>
            <nav className="w-full">
                <div className="flex justify-between px-8 mx-auto">
                    {/* logo */}
                    <div className="flex items-center space-x-4 ">
                        <Link className="mr-2" to="/"></Link>
                    </div>

                    {/* center nav */}
                    <div className="lg:flex font-body font- font-bold text-lg hidden items-center">
                        <Link
                            className="py-5 px-3 text-gray-700 cursor-pointer hover:text-black transition-all duration-300"
                            to="home"
                            smooth={true}
                            duration={800}
                        >
                            Home
                        </Link>
                        <Link
                            className="py-5 px-3 text-gray-700 cursor-pointer hover:text-black transition-all duration-300"
                            to="roadmap"
                            smooth={true}
                            duration={800}
                        >
                            Roadmap
                        </Link>
                        <Link
                            className="py-5 px-3 text-gray-700 cursor-pointer hover:text-black transition-all duration-300"
                            to="faq"
                            smooth={true}
                            duration={800}
                        >
                            FAQ
                        </Link>
                        <Link
                            className="py-5 px-3 text-gray-700 cursor-pointer hover:text-black transition-all duration-300"
                            to="team"
                            smooth={true}
                            duration={800}
                        >
                            Team
                        </Link>

                        <MintButton
                            to="/mint"
                            className="font-body font-semibold"
                        >
                            Mint Now
                        </MintButton>
                    </div>

                    {/* secondary nav */}
                    <div className="lg:flex hidden items-center font-bold space-x-1">
                        <a
                            href="https://twitter.com/SolanaSluts"
                            aria-label="Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-5 px-3 text-gray-700 cursor-pointer hover:text-black transition-all duration-300"
                        >
                            <BsTwitter className="text-2xl" />
                        </a>
                        <a
                            href="https://discord.gg/SY5c6tQKrd"
                            aria-label="Discord"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-5 px-3 text-gray-700 cursor-pointer hover:text-black transition-all duration-300"
                        >
                            <BsDiscord className="text-2xl" />
                        </a>
                    </div>

                    {/* mobile button */}
                    <button
                        onClick={handleButtonClick}
                        className="lg:hidden flex items-center cursor-pointer my-5 text-2xl"
                    >
                        {isClicked ? <FaTimes /> : <RiMenu3Fill />}
                    </button>
                </div>
                {/* mobile menu */}
                <div
                    className={`overflow-hidden lg:hidden text-lg font-semibold font-body flex flex-col items-center transition-all ease-in duration-300 ${
                        isClicked ? " max-h-96" : "max-h-0"
                    }`}
                >
                    <Link
                        className="py-2 px-3 cursor-pointer"
                        to="home"
                        smooth={true}
                        duration={800}
                    >
                        Home
                    </Link>
                    <Link
                        className=" py-2 px-3 cursor-pointer"
                        to="roadmap"
                        smooth={true}
                        duration={800}
                    >
                        Roadmap
                    </Link>
                    <Link
                        className="py-2 px-3 cursor-pointer"
                        to="faq"
                        smooth={true}
                        duration={800}
                    >
                        FAQ
                    </Link>
                    <Link
                        className="py-2 px-3 cursor-pointer"
                        to="team"
                        smooth={true}
                        duration={800}
                    >
                        Team
                    </Link>
                    <MintButton
                        to="/mint"
                        className="font-body text-base font-semibold my-2"
                    >
                        Mint Now
                    </MintButton>
                    <div className="flex mb-5">
                        <a
                            href="https://twitter.com/SolanaSluts"
                            aria-label="Twitter"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-5 px-3 text-gray-700 cursor-pointer hover:text-black transition-all duration-300"
                        >
                            <BsTwitter className="text-2xl" />
                        </a>
                        <a
                            href="https://discord.gg/SY5c6tQKrd"
                            aria-label="Discord"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="py-5 px-3 text-gray-700 cursor-pointer hover:text-black transition-all duration-300"
                        >
                            <BsDiscord className="text-2xl" />
                        </a>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
