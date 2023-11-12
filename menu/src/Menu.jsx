import PropTypes from 'prop-types';

function Menu({items}){
    return(
        <div className='section-center'>
            {items.map((menuItem)=>{
                const {id,title,img,desc,price} = menuItem;
                return (
                    <article className="menu-item" key={id}>
                        <img src={img} alt={title} className='photo' />
                        <div className="item-info">
                            <header>
                                <h4>{title}</h4>
                                <h4 className={price}>{price}</h4>
                            </header>
                            <p className="item-text">{desc}</p>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}

Menu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        category: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        img: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired
    }))
};

export default Menu;