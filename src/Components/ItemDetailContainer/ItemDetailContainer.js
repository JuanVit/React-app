import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import { firestore } from '../../Firebase';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import './ItemDetailContainer.scss'

const ItemDetailContainer = () =>{
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const params = useParams();
    const id = params.id;
    useEffect (() => {
        const db = firestore;
        const collection = db.collection('items');
        const collection_doc = collection.doc(id);
        const collection_doc_get = collection_doc.get();
        collection_doc_get.then(
            res => {
                setLoading(false)
            const data = res.data()
            const data_final = { id , ...data }
            setProduct(data_final)
            })
    },[id])

    return(
        <>
        {loading ? <LoadingSpinner />
        :<main className='itemDetailMain'>
        <ItemDetail product={product}/>
        </main>
        }
        </>
        )
}

export default ItemDetailContainer;