import './ItemDetail.scss'
import ItemCount from '../ItemCount/ItemCount';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { context } from '../CartContext/CartContext';

const ItemDetail = ({product}) => {
    
const [amount, setAmount] =  useState(1);
const [show, setShow] = useState(true);
const {addProduct} = useContext(context);

const onAdd = (cantidad) =>{
    setAmount(cantidad);
    setShow(false)

    const product_to_add = {
        product: product, 
        amount: cantidad, 
    }

    addProduct(product_to_add)
}

                return(
                <section className='detailBox'>
                    <div className='productDetailBox'>                        
                        <div className='imgDetailContainer'>
                            <img src={product.img} alt='thumbnail' />
                        </div>
                        <div className='contentDetailContainer'>
                            <h2>
                                {product.name}
                            </h2>
                            <p className='priceDetail'>
                                $ {product.price}
                            </p>
                            {show ? <ItemCount stock={product.stock} initial={1} onAdd={onAdd}/> : <><p className='set-cantidad'>X {amount}</p><Link to='/Cart'><button className='go-cart-button'>Ir al Carrito</button></Link></>}
                        </div>
                    </div>
                </section>
                )
            }


export default ItemDetail;