import React from "react";
import IngredientsList from "./IngredientsList";
import Instructions from "./Instructions";
import StarRating from "./Starrating";

function Recipe({ name, ingredients, steps }) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <StarRating style={{padding: "15px", background: "lightblue"}} totalstars={5} onDoubleClick={e=>alert("Double Alert!")} />
            <IngredientsList list={ingredients} />
            <Instructions title="Cooking Instructions" steps={steps} />
        </section>
    );
}
export default Recipe;