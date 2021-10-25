import { useState } from "react";
import WorkBtn from "./WorkBtn";
// import project from "../data/workData";
import { BsArrowRightSquare } from "react-icons/bs";
import { AiOutlineCloseSquare } from "react-icons/ai";

function WorkModal({ project }) {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add("active-modal");
    } else {
        document.body.classList.remove("active-modal");
    }

    return (
        <div>
            <button onClick={toggleModal}>
                <WorkBtn onClick={toggleModal} project={project} />
            </button>

            {modal && (
                <div>
                    <div className="fixed z-20 inset-0 overflow-y-auto flex bg-purple-700 bg-opacity-60 ">
                        <div className="flex flex-col items-center justify-center rounded w-screen">
                            <div className="h-full sm:h-auto   px-10 ">
                                <button className="w-full flex justify-end  pb-1">
                                    <AiOutlineCloseSquare onClick={toggleModal} className="text-3xl hover:text-aboutOrangeDark duration-500 ease-in-out" />
                                </button>
                                <div className="flex flex-wrap sm:flex-nowrap">
                                    <div className="sm:flex sm:flex-col p-5  gap-10 sm:w-1/3 bg-workBlue">
                                        <div>
                                            <p className="uppercase text-sm font-semibold">Type</p>
                                            <p className="md:text-lg text-sm font-light">{project.type}</p>
                                        </div>

                                        <div>
                                            <p className="uppercase text-sm font-semibold">Name</p>
                                            <p className="md:text-lg text-sm  font-light">{project.name}</p>
                                        </div>

                                        <div>
                                            <p className="uppercase text-sm font-semibold">About</p>
                                            <p className="md:text-lg text-sm  font-light">{project.about}</p>
                                        </div>

                                        <div>
                                            <p className="uppercase text-sm font-semibold">Tools/Tech</p>
                                            <p className="md:text-lg text-sm  font-light">{project.tools}</p>
                                        </div>
                                        <div className="flex items-center gap-3 hover:text-white   duration-500 ease-in-out">
                                            {/* <p className="uppercase text-sm font-semibold">Check it out</p>
                                        <p className="text-lg  font-light"></p> */}
                                            <a href={project.link} className="uppercase text-sm font-semibold ">
                                                Check it out
                                            </a>
                                            <BsArrowRightSquare className=" " />
                                        </div>
                                    </div>
                                    <div className="grid gap-y-5 flex-grow grid-cols-1 sm:grid-cols-2 justify-items-center bg-workGreyLight  p-5 items-center ">
                                        <img className=" max-h-96  shadow-sm" src={project.projectImage1} alt="" />
                                        <img className=" max-h-96 shadow-sm" src={project.projectImage2} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default WorkModal;
