const ItemDetail = ({product}) => {

    console.log({product})
    return(
        <article>
            <h2>
                Detalle Producto
            </h2>
            <img src={product.img} alt='thumbnail' />
            <p>
                {product.name}
            </p>
            <p>
                Precio: $ {product.price}
            </p>
        </article>
    )
}

export default ItemDetail;