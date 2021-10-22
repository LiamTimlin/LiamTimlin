import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillBehanceCircle } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { FaXingSquare } from "react-icons/fa";

function Footer() {
    return (
        <div className="flex flex-col sm:flex-row justify-between px-10 py-3 items-center bg-footerPink gap-2">
            <div className="order-1">
                <p>&copy; William Timlin 2021</p>
            </div>
            <div className="flex space-x-4 text-3xl order-0 ">
                <a href="https://github.com/LiamTimlin" className="hover:text-white duration-500 ease-in-out transform ">
                    <AiFillGithub />
                </a>
                <a href="https://www.instagram.com/william_timlin/?hl=en" className="hover:text-white duration-500 ease-in-out transform ">
                    <AiOutlineInstagram />
                </a>
                <a href="https://www.behance.net/williamtimlin" className="hover:text-white duration-500 ease-in-out transform ">
                    <AiFillBehanceCircle />
                </a>
                <a href="https://www.linkedin.com/in/williamtimlin" className="hover:text-white duration-500 ease-in-out transform ">
                    <AiFillLinkedin />
                </a>
                <a href="https://www.xing.com/profile/William_Timlin2" className="hover:text-white duration-500 ease-in-out transform ">
                    <FaXingSquare />
                </a>
            </div>
        </div>
    );
}

export default Footer;
