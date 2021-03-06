import React, { useEffect, useState } from 'react';
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.scss'
import { useParams } from 'react-router';
import { firestore } from '../../Firebase';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';


const Banner = () =>{
    return(
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
    </>
)
}

const ItemListContainer = () =>{

    const params = useParams();
    const [products, setProducts] = useState([])
    useEffect (() => {
        const db = firestore
        const collection = db.collection('items');
        const fetchedProducts = []
        setProducts([]);
        let query = params.category ? collection.where("category", "==", `${params.category}`).get() : collection.get();
        query.then((res)=>{
                res.forEach((document) => {
                    const id= document.id;
                    const data = document.data();
                    const final_data = {id,...data};
                    fetchedProducts.push(final_data);
                })
                setProducts([...fetchedProducts]); })
    } , [params.category]) 

    return(
        <main className='main-home' >
        {params.category? null : <Banner/>}
        {products.length ?
        <ItemList products={products} className={params.category ? 'productListCategory' : null} />
        :
        <LoadingSpinner/>
        }
        </main>
    )
}

export default ItemListContainer;