import React from 'react';
const ItemListContainer = () => {
const [name, setName] = React.useState('')
React.useEffect(() => {
const enteredName = prompt('Ingrese su Nombre')
setName(`Bienvenido ${enteredName}`)
}, [])
return(
<div>
    <div>{name}</div>
</div>
)
}
export default ItemListContainer;