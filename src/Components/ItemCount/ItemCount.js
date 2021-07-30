import React, { useState } from 'react';
import './ItemCount.css';
const ItemCount = (props) =>{

    const {stock, initial} = props;
    const [numberItem, setItem] = useState(initial);

    const sumar = () => {
    if(numberItem < stock){
        setItem (numberItem + 1)
    }
    else{
        alert('No hay Stock')
    }
    }
    const restar = () => {
        if(numberItem > 0){
            setItem (numberItem - 1)
        }
        else{
            alert('Producto eliminado del carrito')
        }
    }

    return(
        <div className='itemBtnContainer'>
            <button onClick={restar}>-</button>
            <p>{numberItem}</p>
            <button onClick ={sumar}>+</button>
        </div>    
    )
}
export default ItemCount;