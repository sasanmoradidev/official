import { React, useEffect } from "react";
import Aos from "aos";
import { Route, Routes } from "react-router-dom";
import Header from "./donatecomponents/Header";
import Footer from "./donatecomponents/Footer";
import routes from "./pages";
import Page404 from "./pages/page404";
import "./Donate.scss"
const Donate = () => {
    useEffect(() => {
        Aos.init({
            duration: 2000
        });
    }, []);
    return (
        <>
            <Header />
            <Routes>
                {
                    routes.map((data, idx) => (
                        <Route key={idx} path={data.path} element={data.component} exact />
                    ))
                }
                <Route path="*" element={<Page404 />} />
            </Routes>
            <Footer />
        </>
    );
}

export default Donate;