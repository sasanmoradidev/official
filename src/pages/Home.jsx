import React from "react";
import { NavLink } from "react-router-dom";

const Home = function () {

    return (
        <>
            <h1>Home Page</h1>
            <div id="main">
                <NavLink to="/project">پروژه‌ها</NavLink>
            </div>
        </>
    );
}

export default Home;