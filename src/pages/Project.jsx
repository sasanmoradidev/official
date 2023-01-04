import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import DonateData from "../data/DonateData";
import BackButton from "../donatecomponents/BackButton";
import ProjectPageTitle from "../donatecomponents/ProjectPageTitle";
import DonateGeneral from "../data/DonateGeneral";
import LikeButton from "../donatecomponents/LikeButton";
import ProjectSlider from "../donatecomponents/ProjectSlider";
import ProjectTitle from "../donatecomponents/ProjectTitle";
import RemainingDays from "../donatecomponents/RemainingDays"

const Project = function () {
    return (
        <>
            <h1 className="projtitle">
                <BackButton />
                <ProjectPageTitle data={DonateGeneral} />
                <LikeButton />
            </h1>
            <ProjectSlider slides={DonateData} />
            <ProjectTitle datatitle={DonateData} />
            <RemainingDays data={DonateData}/>
        </>
    );
}

export default Project;