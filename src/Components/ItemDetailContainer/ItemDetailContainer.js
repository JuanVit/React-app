import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";



const productDetail =  {id:1, name:'Producto Uno', img:'imagen', price: 3000}


const ItemDetailContainer = () =>{
    
    const [product, setProduct] = useState([])
    
    useEffect (() => {
        const promesa = getProduct();
        promesa.then(json=>{
            setProduct(json)
        })
    }, [])

    const getProduct = () =>{
        const promesa = new Promise((res, rej) =>{

            setTimeout(() => {
                res(productDetail)
            }, 2000)
        })
        return promesa;
    }

    return(
        <section>
        <ItemDetail product={product}/>
        </section>
    )
}

export default ItemDetailContainer;