import Header from "./Components/Header/Header"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import Cart from "./Components/Cart/Cart";
import SideNavBar from "./Components/SideNavBar/SideNavBar";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CustomProvider from "./Components/CartContext/CartContext";

const App = () =>{
        return (
        <CustomProvider>
                <BrowserRouter>
                        {/* <Header /> */}
                        <SideNavBar />
                        <Switch>
                                <Route path='/' component ={ItemListContainer} exact />
                                <Route path='/category/:category' component={ItemListContainer}/> 
                                <Route path='/item/:id' component={ItemDetailContainer}/>
                                <Route path='/cart' component={Cart}/>
                        </Switch>
                </BrowserRouter>
        </CustomProvider>
        )
}
export default App;