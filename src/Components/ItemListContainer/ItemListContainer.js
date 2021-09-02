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
        const collection = db.collection('products');
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
        <main className="main-background">
        <ItemList products={products}/>
        </main>
    )
}

export default ItemListContainer;