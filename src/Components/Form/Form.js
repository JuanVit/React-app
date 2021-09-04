import {useContext, useState} from 'react';
import { context } from '../CartContext/CartContext';
// import * as firebase from 'firebase';
import firebase from 'firebase';
import 'firebase/firestore'
import { firestore } from '../../Firebase';

const Form = () =>{
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('')
    const [error, setError] = useState(false)
    const [order, setOrder] = useState('')
    const {cart} = useContext(context)
    const guardarNombre = (e) => {
        setNombre(e.target.value)
    }
    const guardarTelefono = (e) => {
        setTelefono(e.target.value)
    }
    const guardarEmail = (e) => {
        setEmail(e.target.value)
    }
    const validarCampos = () => {
        if(nombre.trim() && telefono.trim() && email.trim()){
            return true
        } else{
            return false
        }
    }
    const userInfo = {nombre, telefono, email}
    const db = firestore
    const orders = db.collection('orders')

    const newOrder = {
        buyer: userInfo,
        items: cart,
        date : firebase.firestore.Timestamp.fromDate(new Date()),
        total : cart.map((product) => product.amount * product.product.price)
        .reduce((total, valor) => total + valor) 
    }



    const realizarPedido = () => {
        if(validarCampos()){
            setError(false)
            orders.add(newOrder).then(({id}) => {
                setOrder(id)
            })
        } else{
            setError(true)
        }
    }
    


    return(
    <>
    {error ? <p>Por favor introduzca todos los campos</p> : null}
    <input type='text' placeholder='Nombre' onChange={guardarNombre}/>
    <input type='number' placeholder='Telefono' onChange={guardarTelefono}/>
    <input type='email' placeholder='Email' onChange={guardarEmail}/>
    <button onClick={realizarPedido}>Confirmar</button>
    {order ? <p>Felicitaciones! Su ID de compra es {order}</p> : null}
    </>
    ) 
}


export default Form;