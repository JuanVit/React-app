import React from 'react';
const ItemListContainer = (props) => {
const [name, setName] = React.useState('')
React.useEffect(() => {
const enteredName = prompt('Ingrese su Nombre')
setName(`${enteredName}`)
}, [])
return(
<div>
    <div>{props.greeting} {name}</div>
</div>
)
}
export default ItemListContainer;