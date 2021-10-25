import React from "react";

function LandingPage() {
    return (
        <div className=" sm:h-5/6 grid">
            <div className="grid md:grid-cols-2 text-center items-center  bg-landingGrey gap-10 ">
                <p className="text-8xl order-0 sm:order-0 animate-textSlide lg:text-9xl">hi</p>
                <p className="text-5xl order-1 sm:order-1 ">bearded</p>
                <p className="text-5xl order-3 sm:order-2">designer</p>
                <p className="text-8xl order-2 sm:order-3 animate-textSlide lg:text-9xl">i'm</p>
                <p className="text-8xl order-4 sm:order-4 animate-textSlide lg:text-9xl">william</p>
                <p className="text-5xl order-5 sm:order-5">developer</p>
                <div className="text-5xl order-5 sm:order-6 col-span-full justify-self-center animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                    </svg>
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
