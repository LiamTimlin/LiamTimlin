import React from "react";
import { FaKeyboard } from "react-icons/fa";
import { BsFillPhoneLandscapeFill } from "react-icons/bs";
import profilePic from "../images/profile.jpg";

function AboutPage() {
    return (
        <div className=" h-full md:h-5/6  grid ">
            <div className="grid md:grid-cols-2 text-center items-center  bg-aboutOrangeLight ">
                <div className="grid text-left justify-items-center ">
                    <h1 className="text-7xl lg:text-9xl mx-0   z-10">me</h1>
                    <p className="w-4/5 sm:w-2/5 lg:w-1/4 text-sm md:text-lg z-10 uppercase">
                        I'm a kiwi living in hamburg, germany and to put it simply, I love design and development. <br />
                        <br /> My aim is always to create something that will be meaningful and connect with people in a compelling way.
                    </p>
                    <div className=" h-52 sm:h-96 w-40 absolute mt-5   lg:ml-36 ml-32 z-0 about-shape bg-paperBack  bg-center bg-cover "></div>
                </div>

                <div className="flex  flex-col items-center gap-10 patternBack h-full justify-center pt-10">
                    <div>
                        <img className="w-72 h-72 lg:w-96 lg:h-96 about-pic-shape object-contain" src={profilePic} alt="William Timlin profile  " />
                    </div>

                    <div className="flex gap-6 items-center flex-col pb-5">
                        <p className="uppercase">things I use:</p>
                        <div className="flex lg:space-x-10  flex-col  lg:flex-row pb-5 gap-8">
                            <div className="bg-landingGrey w-52  p-4 lg:p-10  flex flex-col items-center gap-5  duration-500 ease-in-out transform  hover:shadow-squareShadow hover:bg-gray-100">
                                <FaKeyboard className="text-5xl  " />
                                <div className="text-left gap-2 grid text-sm lg:text-lg">
                                    <p>HTML5/CSS3</p>
                                    <p>JavaScript</p>
                                    <p>ReactJS</p>
                                    <p>Tailwind</p>
                                </div>
                            </div>
                            <div className="bg-landingGrey w-52 p-4 lg:p-10 flex flex-col items-center gap-5 duration-500 ease-in-out transform hover:shadow-squareShadow hover:bg-gray-100">
                                <BsFillPhoneLandscapeFill className="text-5xl  " />
                                <div className="text-left gap-2 grid text-sm lg:text-lg">
                                    <p>Figma</p>
                                    <p>Sketch</p>
                                    <p>Photoshop</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutPage;
