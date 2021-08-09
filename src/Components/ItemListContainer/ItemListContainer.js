import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
// import Item from '../Item/Item'
import './ItemListContainer.css'

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

const productsArray = [
    {id:1, name:'Zapatillas Nike Revolution 5 Runinng De Hombre', img:'https://sporting.vteximg.com.br/arquivos/ids/202114-1000-1000/4BQ3204-002-00.jpg?v=637178231968030000', price: '10.200'},
    {id:2, name: 'Zapatillas Nike Revolution 5 De Hombre', img:'https://sporting.vteximg.com.br/arquivos/ids/202093-1000-1000/4BQ3204-400-0584110.jpg?v=637178191910330000', price: '10.200'}
]

const ItemListContainer = () =>{
    
    const [products, setProducts] = useState([])
    
    useEffect (() => {
        const promesa = getProducts();
        promesa.then(json=>{
            setProducts(json)
        })
    }, [])

    const getProducts = () =>{
        const promesa = new Promise((res, rej) =>{

            setTimeout(() => {
                res(productsArray)
            }, 2000)
        })
        return promesa;
    }

    console.log(products)
    return(
        <main className="main-background">
        <ItemList products={products}/>
        </main>
    )
}

export default ItemListContainer;