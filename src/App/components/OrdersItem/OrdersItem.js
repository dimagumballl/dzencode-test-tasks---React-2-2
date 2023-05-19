import style from './OrdersItem.module.css'
import menu from '../../../style/image/menu.png'
import bin from '../../../style/image/bin.png'

import { connect } from 'react-redux'
import {OpenOrderMenu} from '../../../store/action/ControInterfaceAction'
import {DeleteOrderProductsAll} from '../../../store/action/ProductsAction'
import {DeleteOrder} from '../../../store/action/OrdersAction'

function OrdersItem(props){

    function DeleteOrder(){
        let ProductIdArray = []
        let index = 0
        for(let ProductId in props.Products){

            if(props.Products[ProductId].order===props.Item.id){
                ProductIdArray[index]=ProductId
                index=index+1
            }
            
        }
        
        props.DeleteOrderProductsAllAction(ProductIdArray)
        props.DeleteOrderAction(props.Item.id)
    }
    return(
        <div className={style.OrdersItem} style={{ width:!props.ControInterface.OrderMenuOpen?"100%":"100%", justifyContent:"space-between"}} >

            <div className={style.OrdersItemTitle} style={{display:props.ControInterface.OrderMenuOpen?"none":"flex"}}  onClick={()=>props.OpenOrderMenuAction(props.Item.id)}>
                {props.Item.title}
            </div>
            <div className={style.OrdersItemButtonMenu} style={{display:props.ControInterface.OrderMenuOpen?"none":"flex"}} onClick={()=>props.OpenOrderMenuAction(props.Item.id)}>
                <img src={menu}>
                </img>
            </div>
            <div className={style.OrdersItemCounter}   onClick={()=>props.OpenOrderMenuAction(props.Item.id)}>
                <div className={style.OrdersItemCounterNumber}>
                    {props.count}
                </div>
                <div className={style.OrdersItemCounterTitle}>
                    Продукты
                </div>
            </div>
            <div className={style.OrdersItemDate}   onClick={()=>props.OpenOrderMenuAction(props.Item.id)}>
                {props.Item.date}
            </div>
            <div className={style.OrdersItemPrice} style={{display:props.ControInterface.OrderMenuOpen?"none":"flex"}}   onClick={()=>props.OpenOrderMenuAction(props.Item.id)}>
                <div className={style.OrdersItemPriceDolar}>
                    {props.pryceD} $
                </div>
                <div className={style.OrdersItemPriceUAH}>
                    {props.pryceUAN} UAN
                </div>
            </div>
            <div  className={style.OrdersItemDelete} style={{display:props.ControInterface.OrderMenuOpen?"none":"flex"}} onClick={DeleteOrder}>
                <img src={bin}></img>
            </div>
            <div className={style.CloseButton} style={{display:!props.ControInterface.OrderMenuOpen?"none":"flex"}}  onClick={()=>props.OpenOrderMenuAction(props.Item.id)}>
                
            </div>
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        
        DeleteOrderProductsAllAction:(ProductIdArray)=>dispatch(DeleteOrderProductsAll(ProductIdArray)),
        OpenOrderMenuAction:(id)=>dispatch(OpenOrderMenu(id)),
        DeleteOrderAction:(id)=>dispatch(DeleteOrder(id)),
        
        
    };
  };
const mapStateToProps = (store) => {

    return {
        ControInterface: store.ControInterface,
        Products: store.Products
    };
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(OrdersItem)