import React, { useEffect, useState } from 'react';
import Item from '../ItemList/ItemList'

// const ItemListContainer = (props) => {
// const [name, setName] = React.useState('')
// React.useEffect(() => {
// const enteredName = prompt('Ingrese su Nombre')
// setName(`${enteredName}`)
// }, [])
// return(
//     <>
//     <div>
//     {props.greeting} {name}
//     </div>
//     < ItemCount stock='10' initial={1}/>
//     </>
// )
// }

const ItemListContainer = () =>{
    
    const [products, setProducts] = useState([])

    useEffect(() => {
        const products = [
            {id:1, name:'Producto Uno', img:'imagen', price: 3000},
            {id:2, name: 'Producto Dos', img:'imagen', price: 3000}
        ]
        const promise = new Promise((resolve, reject) =>{

            setTimeout(() => {
            resolve(products);
            console.log(products)

            }, 2000)
            
        })
        promise.then((products) => setProducts(products));
    }, []);

    return(
        <ItemList products={products}/>
    )
}

export default ItemListContainer;