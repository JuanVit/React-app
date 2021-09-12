import {useContext, useState} from 'react';
import { context } from '../CartContext/CartContext';
import firebase from 'firebase';
import 'firebase/firestore'
import { firestore } from '../../Firebase';
import './Form.scss'
import { Link } from 'react-router-dom';



const Form = () =>{
    const [nombre, setNombre] = useState('');
    const [telefono, setTelefono] = useState('');
    const [email, setEmail] = useState('')
    const [numero, setNumero] = useState('')
    const [vencimiento, setVencimiento] = useState('')
    const [cvv, setCVV] = useState('')
    const [error, setError] = useState(false)
    const [order, setOrder] = useState('')
    const {cart, clear} = useContext(context)
    const guardarNombre = (e) => {
        setNombre(e.target.value)
    }
    const guardarTelefono = (e) => {
        setTelefono(e.target.value)
    }
    const guardarEmail = (e) => {
        setEmail(e.target.value)
    }
    const guardarNumero = (e) => {
        setNumero(e.target.value)
    }
    const guardarVencimiento = (e) => {
        setVencimiento(e.target.value)
    }
    const guardarCVV = (e) => {
        setCVV(e.target.value)
    }
    const validarCampos = () => {
        if(nombre.trim() && telefono.trim() && email.trim() && numero.trim() && vencimiento.trim() && cvv.trim()){
            return true
        } else{
            return false
        }
    }
    const userInfo = {nombre, telefono, email, numero, vencimiento, cvv}
    const db = firestore
    const orders = db.collection('orders')

    const newOrder = {
        buyer: userInfo,
        items: cart,
        date : firebase.firestore.Timestamp.fromDate(new Date()),
        total : cart.length && cart.map((product) => product.amount * product.product.price)
        .reduce((total, valor) => total + valor) 
    }



    const realizarPedido = () => {
        if(validarCampos()){
            setError(false)
            orders.add(newOrder).then(({id}) => {
                setOrder(id)
                clear()
            })
        } else{
            setError(true)
        }
    }
    
    return(
<>
    {order ? 
    <div className='compra-success'>
        <h2>¡Gracias por elegirnos!</h2>
        <h4>La compra se realizó exitosamente.</h4>
        <div className='gif-success'>
        <iframe title='iframe-buy' src="https://giphy.com/embed/3osxYdXvsGw6wT5lIY" width="100%" height="250" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        </div>
        <h4>
            El ID de tu compra es: <span>{order}</span>
        </h4>
        <Link to='/'><h4>Seguir comprando</h4></Link>
    </div>
    :
    <>
    <div className='form'>
    {error ? <p className='error-input'>* Por favor introduzca todos los campos</p> : null}
    <input type='text'  placeholder='Nombre' onChange={guardarNombre}/>
    <input type='text'  placeholder='Teléfono' onChange={guardarTelefono}/>
    <input type='email'  placeholder='Email' onChange={guardarEmail}/>
    <input type='text'  placeholder='Número de la tarjeta' onChange={guardarNumero}/>
    <input type='text'  placeholder='Fecha de vencimiento' onChange={guardarVencimiento}/>
    <input type='text' placeholder='CVV' onChange={guardarCVV}/>
    <button className='btn-comprar' onClick={realizarPedido}>Confirmar</button>
    </div>
    </>}
    </>
) 
}


export default Form;