import './ItemDetail.css'

const ItemDetail = ({product}) => {


                return(
                <section className='detailBox'>
                    <h2 className='detailTitle'>
                        Detalle Producto
                    </h2>
                    <div className='productDetailBox'>
                        <img src={product.img} alt='thumbnail' />
                        <p>
                            {product.name}
                        </p>
                        <p>
                            Precio: $ {product.price}
                        </p>
                    </div>
                </section>
                )
            }


export default ItemDetail;