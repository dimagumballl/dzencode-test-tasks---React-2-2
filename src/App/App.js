import Layout from "./components/Layout/Layout";
import style from '../style/App.module.css'
import {
  Route,
  Routes
} from "react-router-dom";
import Products from './components/Products/Products'
import Orders from './components/Orders/Orders'
import {useEffect} from 'react'
import {FirstInitProducts} from '../store/action/ProductsAction'
import {FirstInitOrders} from '../store/action/OrdersAction'
import { connect } from 'react-redux';

function App(props) {
  useEffect(()=>{

    props.FirstInitProductsAction()
    props.FirstInitOrdersAction()
  },[])
  return (
    <div className={style.App}>
      
      <Layout>
        <Routes>
          <Route path="" element={<Products/>}>

          </Route>
          <Route path="/orders" element={<Orders/>}>

          </Route>
        </Routes>
 


      </Layout>
      

    </div>
  );
}


const mapDispatchToProps = (dispatch) => {
  return {
    FirstInitProductsAction:()=>dispatch(FirstInitProducts()),
    FirstInitOrdersAction:()=>dispatch(FirstInitOrders()),
    


  };
};



const mapStateToProps = (store) => {

  return {

  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
  )(App)