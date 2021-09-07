import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.scss'
import { useParams } from 'react-router';
import { firestore } from '../../Firebase';

const ItemListContainer = () =>{

    const params = useParams();
    const [products, setProducts] = useState([])
    useEffect (() => {
        const db = firestore
        const collection = db.collection('items');
        const products = []
        
        if(params.category){
            const filter_query = collection.where("category", "==", `${params.category}`);
            const query = filter_query.get();
            query.then((res)=>{
                res.forEach((document) => {
                    const id= document.id;
                    const data = document.data();
                    const final_data = {id,...data};
                    products.push(final_data);
                })
                setProducts(products);
            })
        } else{
            const query = collection.get();
            query.then((res)=>{
                res.forEach((document) => {
                    const id= document.id;
                    const data = document.data();
                    const final_data = {id,...data};
                    products.push(final_data);
                })
                setProducts(products);
            })
        }       
    } , [params.category])

    return(
        <main className='main-home' >
        {params.category? null : 
        <>
         <div className='container-envios'>
                <p>
                  ENVÍOS GRATIS A PARTIR DE $3000 | ENVÍOS CON NORMALIDAD LAS 24HS A GBA Y CABA.
                </p>
        </div> 
        <img className='img-banner' src="https://cdn.shopify.com/s/files/1/1356/0667/collections/Jacket_Banner2_b12ed0f9-42be-4ea5-bbf4-18afbcd96551_1600x.jpg?v=1626286125" alt="Banner"/>
             <h1 className='titulo-productos'>
                 Mira todos los productos !
            </h1>
        </>}
        {params.category?<ItemList products={products} className='productListCategory'/> : <ItemList products={products} />}
        </main>
    )
}

export default ItemListContainer;