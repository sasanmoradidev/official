import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Star = ({ selected = false, onSelect = f => f }) => (
    <AiFillStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const createarray = length => [...Array(length)];

export default function StarRating({style={}, totalstars = 3, ...props }) {
    const [selectedStars, setSelectedStars] = useState(0);

    return (
        <div style={{padding: "5px", ...style}} {...props}>
            {
                createarray(totalstars).map((n, i) => (
                    <Star
                        key={i}
                        selected={selectedStars > i}
                        onSelect={() => setSelectedStars(i + 1)}
                    />
                ))
            }
            <p>
                {selectedStars} of {totalstars} stars
            </p>
        </div>
    );
}