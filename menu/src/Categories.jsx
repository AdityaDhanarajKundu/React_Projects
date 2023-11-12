function Categories({filterMenu}){
    return(
        <div className="btn-container">
            <button type="button" className="filter-btn" onClick={()=> filterMenu("all")}>All</button>
            <button type="button" className="filter-btn" onClick={()=> filterMenu("breakfast")}>Breakfast</button>
        </div>
    );
}

export default Categories;