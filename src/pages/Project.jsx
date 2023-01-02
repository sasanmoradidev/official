import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DonateData from "../data/DonateData";
import BackButton from "../donatecomponents/BackButton";
import ProjectTitle from "../donatecomponents/ProjectTitle";
import DonateGeneral from "../data/DonateGeneral";
import LikeButton from "../donatecomponents/LikeButton";


const Project = function () {
    return (
        <>
            <h1 className="projtitle">
                <BackButton />
                <ProjectTitle data={DonateGeneral} />
                <LikeButton />
            </h1>
        </>
    );
}

export default Project;