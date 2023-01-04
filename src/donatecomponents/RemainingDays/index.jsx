import React from 'react';
import PropTypes from 'prop-types';
import classes from './styles.module.scss';

const RemainingDays = function ({ data }) {
    const url = "http://localhost:88/cockpitcore/api/content/item/post";
    const api = "API-81ebb0165982314d4daeceb0d4b7650e71504ef4";

    fetch(url, {
        method: 'GET',
        headers: {
            "api-key": api,
        }
    })
        .then(response => response.json())
        .then(response => console.log(response));
    fetch(url, {
        method: 'POST',
        headers: {
            "api-key": api,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "data": { "title": "Day one", "content": "<p>This is day one content</p>" } })
    })
        .then(function (res) { console.log(res) })
        .catch(function (res) { console.log(res) });

    const { remainingdays } = data[0];
    const now = new Date(Date.now());
    const date = new Date(remainingdays);
    // console.log((date.getMonth()) - (now.getMonth()));
    console.log(process.env.REACT_APP_ACCESS_KEY);
    // console.log(date);
    return (
        <span>{remainingdays}</span>
    );
}

RemainingDays.propTypes = {
    remainingdays: PropTypes.object
}

export default RemainingDays;