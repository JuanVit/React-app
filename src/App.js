import Header from "./Components/Header"
import UserWelcome from "./Components/ItemListContainer";

const App = () => 
        <>
        <Header />
        <div UserWelcome>{`Bienvenido ${UserWelcome()}`}</div>
        </>

export default App;