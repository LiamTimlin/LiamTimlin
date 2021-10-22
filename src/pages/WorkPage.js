import React from "react";

import WorkModal from "../components/WorkModal";
import project from "../data/workData";

function WorkPage() {
    return (
        <div className="grid bg-workGreyLight pt-10 h-5/6 md:h-4/6 patternBack2">
            <div className="grid text-center justify-items-center  ">
                <div className="text-7xl lg:text-9xl  z-10 ">wörk</div>
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

{
    /* <div className="grid text-left ">
<h1 className="text-9xl mx-0  ml-40 z-10">me</h1>
<p className="w-1/4  ml-40 z-10 ">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptatum molestiae facere quos neque voluptates alias illo fugiat fugit
    quo ex, esse rem, iure itaque quia veritatis odit amet ea!
</p>
<div className="bg-aboutOrangeDark h-96 w-40 absolute ml-60 z-0 about-shape"></div>
</div> */
}
