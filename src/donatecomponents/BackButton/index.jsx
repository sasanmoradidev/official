import React from "react";
import { NavLink } from "react-router-dom";
import { BiLeftArrowAlt } from "react-icons/bi";
import "./styles.scss";


const BackButton = function () {
    return (
        <>
            <NavLink to="/" className="backbutton circle"><span><BiLeftArrowAlt /></span></NavLink>
        </>
    );
};

export default BackButton;