import './Item.css'

const Item = ({product}, {key}) => {
    return (
        <div className='item-box'>
            <div className="item-img-container">
                <img className="item-img" src={product.img} alt={product.img}/>
            </div>
            <div className="item-bottom"> 
                <h2>{product.name}</h2>
                <p>$ {product.price}</p>
                <button className="item-button">View</button>
            </div>
        </div>
    )
}

export default Item;