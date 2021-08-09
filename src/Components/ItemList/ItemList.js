import Item from '../Item/Item'
import './ItemList.css'
const ItemList = ({products}) => {
    
    return(
    <section className="item-list-container">
            {products.map(product => {
                return(
                    <Item product={product} key={product.id}/>
                )
            })} 
    </section>
    )
}

export default ItemList;