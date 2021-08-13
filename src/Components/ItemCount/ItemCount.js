import React, { useState } from 'react';
import './ItemCount.css';
const ItemCount = ({stock, initial, onAdd}) =>{

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
        const confirmar = () =>{
            if(stock > 0){
                onAdd(numberItem)
            }
        }

    return(
        <div className='itemBtnContainer'>
            <button onClick={restar}>-</button>
            <p>{numberItem}</p>
            <button onClick ={sumar}>+</button>
            <p onClick={confirmar}>Comprar</p>
        </div>    
    )
}
export default ItemCount;