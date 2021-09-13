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
            {numberItem > 0 ? <button  onClick={confirmar}>Agregar al Carrito</button> : <p>Introduzca una cantidad válida</p>}
        </div>  
        </>
    )
}
export default ItemCount;