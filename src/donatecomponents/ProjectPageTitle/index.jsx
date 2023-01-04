import React from "react";
import PropTypes from "prop-types";
import './styles.scss';

ProjectPageTitle.propTypes= {
    data: PropTypes.object,
}
function ProjectPageTitle(props) {
    const {data} = props;
    return (
        <>
            <span>{data.pagetitle}</span>
        </>
    );
}

export default ProjectPageTitle;