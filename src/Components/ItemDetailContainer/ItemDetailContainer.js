import { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router";
import { firestore } from '../../Firebase';
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

// const productsArray = [
//     {id:1, name:'Nike Revolution 5 Runinng De Hombre', img:'https://sporting.vteximg.com.br/arquivos/ids/202114-1000-1000/4BQ3204-002-00.jpg?v=637178231968030000', price: '10.200', category:'men', stock:'4'},
//     {id:2, name:'Nike Revolution 5 De Hombre', img:'https://sporting.vteximg.com.br/arquivos/ids/202093-1000-1000/4BQ3204-400-0584110.jpg?v=637178191910330000', price: '10.200', category:'men', stock:'7'},
//     {id:3, name:'Nike Air Force 1 "07 Lv8' , img:'https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw2b6212b1/products/NI_CZ0337-700/NI_CZ0337-700-1.JPG?sw=400&sh=400', price:'17.999', category:'men', stock:'9'},
//     {id:4 ,name:'Nike Air Force 1 Shadow' , img:'https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw8463fd8d/products/NI_CU8591-001/NI_CU8591-001-1.JPG?sw=400&sh=400', price:'19.499', category:'women', stock:'0' },
//     {id:5 ,name:'Nike Air Force 1 Shadow' , img:'https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwb393636b/products/NI_CJ1641-101/NI_CJ1641-101-1.JPG?sw=400&sh=400', price:'19.499', category:'women', stock:'5'},
//     {id:6 ,name:'Nike Air Force 1 "07 Lx' , img:'https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwb76f1428/products/NI_CT1990-001/NI_CT1990-001-1.JPG?sw=400&sh=400', price:'19.499', category:'women', stock:'3'},
//     {id:7 ,name:'Air Jordan 1 Low' , img:'https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw3a04aef6/products/NI_553560-118/NI_553560-118-1.JPG?sw=400&sh=400', price:'14.499', category:'kids', stock:'13'},
//     {id:8 ,name:'Nike Court Legacy' , img:'https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dw88ddbd43/products/NI_DA5381-102/NI_DA5381-102-1.JPG?sw=400&sh=400', price:'6.999', category:'kids', stock:'8'},
//     {id:9 ,name:'Nike Foam Force 1' , img:'https://www.moovbydexter.com.ar/dw/image/v2/BDTF_PRD/on/demandware.static/-/Sites-dabra-catalog/default/dwc0c2ed78/products/NI_AQ2442-400/NI_AQ2442-400-1.JPG?sw=400&sh=400', price:'3.599', category:'kids', stock:'6'},
// ]
// const productDetail =  {id:1, name:'Producto Uno', img:'imagen', price: 3000}


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