import Item from '../Item/Item'

const ItemList = (products) => {
    return(
    <div>
        {products.map((product) => (
            <Item  props={product}/>
        ))}
    </div>
    )
}

export default ItemList;