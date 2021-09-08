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
                            <p>
                                {product.name}
                            </p>
                            <p className='priceDetail'>
                                Precio: $ {product.price}
                            </p>
                            {show ? <ItemCount stock={product.stock} initial={product.stock>=1 ? 1 : 0} onAdd={onAdd}/> : <><p>Cantidad elegida {amount} </p><Link to='/Cart'><button>Finalizar compra</button></Link></>}
                        </div>
                    </div>
                    <p className='productDetailDescription'>
                        Las zapatillas Nike Air Max Oketo están confeccionadas con el logotipo de Swoosh propio de la marca en uno de sus laterales y 
                        tienen una plantila ligeramente acolchada
                        , una unidad Max Air para mayor comodidad y una suela exterior con diseño de gofres.
                        Su suela de goma te proporciona la tracción necesaria para usarla todo el día.
                    </p>
                </section>
                )
            }


export default ItemDetail;