import { useState } from "react";
import WorkBtn from "./WorkBtn";
import project from "../data/workData";

function BrewDog() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    };
    return (
        <div>
            <button onClick={toggleModal} className="btn-modal">
                <WorkBtn onClick={toggleModal} project={project[2]} />
            </button>

            {modal && (
                <div onClick={toggleModal} className="modal fixed z-10 inset-0 overflow-y-auto flex bg-purple-700 bg-opacity-60 ">
                    <div className="flex flex-col items-center justify-center rounded">
                        <div className="bg-white h-5/6 w-5/6 ">
                            <div className="flex justify-end p-3">
                                <button className="" onClick={toggleModal}>
                                    X
                                </button>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 ">
                                <div className="w-2/3 pl-4 sm:flex sm:flex-col sm:justify-evenly">
                                    <p>ui design</p>
                                    <p>deutsche bahn</p>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, vero possimus? Non magnam eveniet distinctio culpa
                                        provident.
                                    </p>
                                    <div>
                                        <p>tools/tech</p>
                                        <p>sketch</p>
                                    </div>
                                </div>
                                <div className="col-span-2">
                                    <img
                                        src="https://images.unsplash.com/photo-1579199931550-7496521679ea?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhdHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                                        alt=""
                                    />
                                    <img
                                        src="https://images.unsplash.com/photo-1517213849290-bbbfffdc6da3?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGNhdHxlbnwwfDJ8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60"
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default BrewDog;
