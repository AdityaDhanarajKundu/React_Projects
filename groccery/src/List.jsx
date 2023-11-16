import {FaEdit, FaTrash} from 'react-icons/fa';
import PropTypes from 'prop-types';

function List({items,removeItem}){
    return(
        <div className="grocery-list">
            {items.map((item)=>{
                const {id, title} = item;
                return(
                    <article key={id} className='grocery-item'>
                        <p className="title">{title}</p>
                        <div className="btn-container">
                            <button type="button" className='edit-btn'>
                                <FaEdit />
                            </button>
                            <button type="button" className='delete-btn' onClick={()=>removeItem(id)}>
                                <FaTrash />
                            </button>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

List.propTypes = {
    items: PropTypes.array.isRequired,
    removeItem: PropTypes.func.isRequired,
};

export default List;