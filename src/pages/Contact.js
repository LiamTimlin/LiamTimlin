import React from "react";
import Sent from "../components/Sent";

function Contact() {
    return (
        <div className="h-screen grid ">
            <div className="grid md:grid-cols-2 text-center items-center  bg-contactRed ">
                <div className="flex justify-center order-1 sm:order-0 flex-col items-center px-5  h-full patternBack4 ">
                    <form
                        action="https://formsubmit.co/williamtimlin@outlook.com"
                        method="POST"
                        className="flex flex-col w-5/6 text-left px-10 mb-5 pt-5 gap-3 bg-workGreyLight p-5 "
                    >
                        <p className="uppercase text-xl mb-3 animate-bounce text-center">Give me a yell</p>
                        <label>Your Name:</label>
                        <input type="text" name="name" required className="bg-contactBlue focus:bg-aboutOrangeLight h-10 px-3 " />
                        <label>Email:</label>
                        <input type="email" name="email" required className="bg-contactBlue focus:bg-aboutOrangeLight h-10 px-3 " />
                        <label className="mt-4">Message:</label>
                        <textarea type="text" name="message" required className="bg-contactBlue focus:bg-aboutOrangeLight h-28  px-3 " />
                        <input type="hidden" name="_next" value={Sent} />
                        <input type="hidden" name="_next" value="https://liamtimlin.github.io/" />
                        <button
                            type="submit"
                            className="bg-green-500 w-full sm:w-28 text-xl p-3  text-center self-end mt-5 text-workGreyDark duration-500 ease-in-out transform hover:shadow-squareShadow"
                        >
                            Send
                        </button>
                    </form>
                </div>
                <div className="grid text-left order-0 sm:order-1 justify-items-center  lg:justify-center space-y-5">
                    <h1 className="text-7xl lg:text-9xl mx-0  sm:ml-40 z-10">
                        hi <br /> again
                    </h1>
                    <p className=" w-4/5 sm:w-2/4  text-sm md:text-lg sm:ml-40 z-10 uppercase">
                        I'm always excited to work on new projects as a freelancer or hear of any interesting opportunities. <br /> <br /> Feel free to send me
                        a message and i would be happy to get to back to you.
                    </p>
                    <div className="bg-workGreyLight h-32 sm:h-60 w-56 lg:h-60 xl:w-96 absolute sm:justify-items-startml-36 lg:ml-60  z-0 about-shape bg-paperBack3  bg-center bg-cover"></div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
