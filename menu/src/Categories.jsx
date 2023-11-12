import PropTypes from "prop-types";

function Categories({ filterMenu, categories }) {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filterMenu(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}

Categories.propTypes = {
  filterMenu: PropTypes.func.isRequired,
  categories: PropTypes.arrayOf(PropTypes.string.isRequired),
};

export default Categories;
