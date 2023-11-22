import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

function Cocktail({id, name, image, info, glass}){
    return(
        <article className='cocktail'>
            <div className='img-container'>
                <img src={image} alt={name} />
            </div>
            <div className="cocktail-footer">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p>{info}</p>
                <NavLink to={`/cocktail/${id}`} className='btn btn-primary btn-details'>details</NavLink>
            </div>
        </article>
    );
}

Cocktail.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    glass: PropTypes.string.isRequired,
}

export default Cocktail;