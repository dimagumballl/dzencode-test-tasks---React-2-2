import style from './OrderProductList.module.css'
import close from '../../../style/image/close.png'
import add from '../../../style/image/add.png'
import OrderProductListItem from '../OrderProductListItem/OrderProductListItem'
import {connect} from 'react-redux'
import {OpenOrderMenu} from '../../../store/action/ControInterfaceAction'
import {SetProductNewOrder} from '../../../store/action/ProductsAction'

function OrderProductList(props){
    function AddNewProduct(id){
        
        let dataOrderIdProductId = {
            OrderId:props.Orders[props.ControInterface.OrederMenuId].id,
            ProductId:id
        }
        props.SetProductNewOrderAction(dataOrderIdProductId)
    }
    function DeleteNewProduct(id){

        let dataOrderIdProductId = {
            OrderId:"null",
            ProductId:id
        }
        props.SetProductNewOrderAction(dataOrderIdProductId)
    }
    return(
        <div className={style.OrderProductList} style={{width: props.display?"60%":"0%", boxShadow: props.display?"1px 1px 1px 1px gray":"none"}}>
            <div className={style.OrderProductListTopBar} style={{display: props.display?"inline":"none"}}>
                <div style={{width:"100%", display:"flex",justifyContent: "flex-end"}} >
                    <div className={style.OrderProductListClose}>

                    </div>
                </div>

                <div className={style.OrderProductListTitle}  style={{display: props.display?"inline":"none"}}>

                    {
                        props.Orders[props.ControInterface.OrederMenuId]===null?"":props.Orders[props.ControInterface.OrederMenuId]===undefined?"":props.Orders[props.ControInterface.OrederMenuId].title
                    
                    }
                </div>
            </div>
            <div className={style.OrderProductListAddProduct}  style={{display: props.display?"flex":"none"}}>

                <div className={style.OrderProductListAddProductTitle}>
                    В заказе
                </div>
            </div>
            <div className={style.OrderProductListBar}  style={{display: props.display?"flex":"none"}}>
                
            {
                    Object.keys(props.Products).map((id)=>{

                        return(
                            props.Orders[props.ControInterface.OrederMenuId]===null?"":
                            props.Orders[props.ControInterface.OrederMenuId]===undefined?"":
                            props.Products===undefined?"":
                            props.Orders[props.ControInterface.OrederMenuId].id!==props.Products[id].order?"":

                    <div key={id}><OrderProductListItem
                            Item = {props.Products[id]}
                            fun ={DeleteNewProduct}  
                              
                            title="Убрать"
                            colorB="red"
                        /></div>
                        )
                    }
                    
                    
                    
                    )
                }
                
                
            </div>
            <div className={style.OrderProductListAddProduct}  style={{display: props.display?"flex":"none"}}>
                <div className={style.OrderProductListAddProductButton}>
                    <img src={add}></img>
                </div>
                <div className={style.OrderProductListAddProductTitle}>
                    Добавить продукт
                </div>
            </div>
            <div className={style.OrderProductListBar}  style={{display: props.display?"flex":"none"}}>
                
                {
                    Object.keys(props.Products).map((id)=>{
                        return(
                                props.Orders[props.ControInterface.OrederMenuId]===null?"":
                                props.Orders[props.ControInterface.OrederMenuId]===undefined?"":
                                props.Products===undefined?"":
                                "null"!==props.Products[id].order?"":
    
                        <div key={id}><OrderProductListItem
                                Item = {props.Products[id]}
                                fun ={AddNewProduct} 
                                title="добавить"
                                colorB="green"
                        /></div>
                        )
                    })
                }
                    
                    
            </div>
        </div>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        OrderMenuOpenAction:()=>dispatch(OpenOrderMenu()),
        SetProductNewOrderAction:(dataOrderIdProductId)=>dispatch(SetProductNewOrder(dataOrderIdProductId)),
        
    };
  };
const mapStateToProps = (store) => {

    return {
        ControInterface: store.ControInterface,
        Products: store.Products,
        Orders: store.Orders

    };
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(OrderProductList)