import logo from './logo.svg';
// import './App.css';
import Header from './Components/Header/Header';
import Shop from './Components/Shop/Shop';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import OrderReview from './Components/OrderReview/OrderReview';
import Inventory from './Components/Inventory/Inventory';


function App() {
  return (
    <div className="App">
     <Router>
            <Header></Header>
       <Switch>
         <Route exact path="/">
            <Shop></Shop>
         </Route>
         <Route path='/shop'>
            <Shop></Shop>
         </Route>
         <Route path='/orderReview'>
           <OrderReview></OrderReview>
         </Route>
         <Route path={'/inventory'}>
            <Inventory></Inventory>
         </Route>
         
       </Switch>
     </Router>
    </div>
  );
}

export default App;
