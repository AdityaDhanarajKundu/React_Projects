import { useGlobalContext } from "../context";

function SearchForm(){
    const { setSearchTerm } = useGlobalContext();
    
    return(
        <div>
            <h2>search form</h2>
        </div>
    );
}

export default SearchForm;