import React from "react";
import Color from "./Color"

export default function Colorlist({
    colors = [],
    onRemoveColor = f => f,
    onRateColor = f => f
}) {
    if (!colors.length) return <div>There is no color in the list.</div>
    return (
        <div>
            {
                colors.map(color =>
                    <Color
                        key={color.id}
                        {...color}
                        onRemove={onRemoveColor}
                        onRate={onRateColor}
                    />
                )
            }
        </div>
    );

};