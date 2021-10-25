import React from "react";

import WorkModal from "../components/WorkModal";
import project from "../data/workData";

function WorkPage() {
    return (
        <div className="grid bg-workGreyLight pt-10 h-full md:h-4/6 patternBack2 pb-10">
            <div className="grid text-center justify-items-center  ">
                <div className="text-7xl lg:text-9xl mb-5 z-10 ">wörk</div>
                <div className="bg-workBlue h-20 w-40 lg:h-40 lg:w-96 absolute ml-32 lg:ml-60 z-0 about-shape bg-paperBack2 bg-center bg-cover "></div>
            </div>
            <div className="grid sm:grid-cols-2 justify-items-center gap-5 p-3">
                {project.map((project, i) => {
                    return <WorkModal project={project} key={i} />;
                })}
            </div>
        </div>
    );
}

export default WorkPage;
