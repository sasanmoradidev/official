import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import './styles.scss';

const LikeButton = function () {
    return (
        <>
            <NavLink className="likebutton circle"><span><AiOutlineHeart /></span></NavLink>
        </>
    );
};

export default LikeButton;