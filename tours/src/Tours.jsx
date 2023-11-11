import Tour from "./Tour";
import { useState } from "react";
import PropTypes from "prop-types";

function Tours({tours,remove}){
    return(
        <section>
            <div className="title">
                <h2>Our Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour)=>{
                    return <Tour key={tour.id} {...tour} />
                })}
            </div>
        </section>
    );
}

Tours.propTypes = {
    tours: PropTypes.array.isRequired
};

export default Tours;