import React from "react";
import PropTypes from "prop-types";
import './styles.scss';
ProjectTitle.propTypes= {
    data: PropTypes.object,
}

function ProjectTitle(props) {
    const {data} = props;
    console.log(data);
    return (
        <>
            <span>{data.pagetitle}</span>
        </>
    );
}

export default ProjectTitle;