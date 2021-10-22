import React from "react";

function WorkBtn({ project }) {
    return (
        <>
            <div className="bg-workGreyDark p-7 hover:shadow-squareShadow duration-500 ease-in-out transform hover:bg-gray-100">
                <img className="h-72 w-72 work-shape object-cover" src={project.img} alt="" />
                <div className="text-left mt-5">
                    <p className="uppercase">{project.type}</p>
                    <p className="text-3xl">{project.name}</p>
                </div>
            </div>
        </>
    );
}

export default WorkBtn;
