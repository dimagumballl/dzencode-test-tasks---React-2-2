import style from './Logo.module.css'
import logo from '../../../style/image/logo.png'
import { connect } from 'react-redux';
import {FirstInitProducts} from '../../../store/action/ProductsAction'
import {FirstInitOrders} from '../../../store/action/OrdersAction'

function Logo(props) {
  function InitAPI(){
    //props.FirstInitProductsAction()
    //props.FirstInitOrdersAction()
  }
    return (
      <div className={style.Logo} onClick={()=>InitAPI()}>
        <img src={logo}></img>
        
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
    )(Logo)
  