import React, { useState } from 'react';
import './ItemCount.scss';
import * as AiIcons from 'react-icons/ai'
const ItemCount = ({stock, initial, onAdd}) =>{

    const [numberItem, setItem] = useState(initial);
    console.log(initial)
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
    }
        const confirmar = () =>{
            if(stock > 0){
                onAdd(numberItem)
            }
        }

    return(
        <>
        <div className='itemBtnContainer'>
            <AiIcons.AiOutlineMinus onClick={restar} cursor='pointer' color='#A95E47'/>
            <p>{numberItem}</p>
            <AiIcons.AiOutlinePlus onClick={sumar} cursor='pointer' color='#A95E47' />
        </div>  
        <div>
            {numberItem  ? <button  onClick={confirmar}>Agregar al Carrito</button> : null}
        </div>  
        </>
    )
}
export default ItemCount;