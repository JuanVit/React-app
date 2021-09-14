import Header from "./Components/Header/Header"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import Form from "./Components/Form/Form";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomProvider from "./Components/CartContext/CartContext";

const App = () =>{
        return (
        <CustomProvider>
                <BrowserRouter>
                        <Header />
                        <Switch>
                                <Route path='/' component ={ItemListContainer} exact />
                                <Route path='/category/:category' component={ItemListContainer}/> 
                                <Route path='/item/:id' component={ItemDetailContainer}/>
                                <Route path='/cart' component={Cart}/>
                                <Route path='/Form' component={Form} />
                        </Switch>
                        <Footer/>
                </BrowserRouter>
        </CustomProvider>
        )
}
export default App;