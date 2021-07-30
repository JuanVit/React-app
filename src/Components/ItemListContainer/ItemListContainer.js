import React from 'react';
import ItemCount from '../ItemCount/ItemCount'
const ItemListContainer = (props) => {
const [name, setName] = React.useState('')
React.useEffect(() => {
const enteredName = prompt('Ingrese su Nombre')
setName(`${enteredName}`)
}, [])
return(
    <>
    <div>
    {props.greeting} {name}
    </div>
    < ItemCount stock='10' initial={1}/>
    </>
)
}
export default ItemListContainer;