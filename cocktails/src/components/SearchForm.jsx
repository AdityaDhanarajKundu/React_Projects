import { useGlobalContext } from "../context";
import { useRef, useEffect } from "react";

function SearchForm(){
    const { setSearchTerm } = useGlobalContext();
    const searchValue = useRef("");

    useEffect(() => {
        searchValue.current.focus();
    }, []);
    
    return(
        <section className="section search">
            <form className="search-form">
                <div className="form-control">
                    {/* uncontrolled and dynamic handling of input values that is using useRef rather than state values and avoiding use the value attribute */}
                    <label htmlFor="name">search your favorite cocktail</label>
                    <input type="text" id="name" ref={searchValue} onChange={() => setSearchTerm(searchValue.current.value)} />
                </div>
            </form>
        </section>
    );
}

export default SearchForm;