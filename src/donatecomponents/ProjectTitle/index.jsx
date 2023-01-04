import PropTypes from "prop-types"
import classes from './styles.module.scss';

ProjectTitle.propTypes = {
    title: PropTypes.object,
}
function ProjectTitle ({datatitle}){
    const {title} = datatitle[0];
    return(
        <h1 className={classes.title}>{title}</h1>
    );
}

export default ProjectTitle;