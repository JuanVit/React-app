import './Item.scss'
import { Link } from 'react-router-dom';

const Item = ({product}, {key}) => {
    return (
        <div className='item-box'>
            <div className="item-img-container">
                <img className="item-img" src={product.img} alt={product.img}/>
            </div>
            <div className="item-bottom"> 
                <h2>{product.name}</h2>
                <p>$ {product.price}</p>
                <Link to={`/item/${product.id}`}><button className="item-button">Comprar</button></Link>
            </div>
        </div>
    )
}

export default Item;