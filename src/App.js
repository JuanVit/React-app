import Header from "./Components/Header/Header"
import ItemListContainer from "./Components/ItemListContainer/ItemListContainer";
 import ItemDetailContainer from "./Components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const App = () =>{
        return (
        <BrowserRouter>
                <Header />
                <Switch>
                        <Route path='/' component ={ItemListContainer} exact />
                        <Route path='/category/:category' component={ItemListContainer}/> 
                        <Route path='/item/:id' component={ItemDetailContainer}/>
                </Switch>
                {/* <ItemDetailContainer /> */}
        </BrowserRouter>
        )
        }
export default App;