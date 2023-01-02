import React from "react";
import Home from "./Home";
import Project from "./Project"

const routes = [
    { path: "/", component: <Home /> },
    { path: "/project", component: <Project /> }
];


export default routes;