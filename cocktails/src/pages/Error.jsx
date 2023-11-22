import {NavLink} from "react-router-dom";

function Error(){
    return(
        <section className="error-page section">
            <div className="error-container">
                <h1>opps! it's a dead end</h1>
                <NavLink to="/" className="btn btn-primary">
                    back home
                </NavLink>
            </div>
        </section>
    );
}

export default Error;