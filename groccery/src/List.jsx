import {FaEdit, FaTrash} from 'react-icons/fa';
import PropTypes from 'prop-types';

function List({items}){
    return(
        <h2>list component</h2>
    );
}

List.propTypes = {
    items: PropTypes.array.isRequired
};

export default List;