import style from './Orders.module.css'
import add from '../../../style/image/add.png'
import OrdersItem from '../OrdersItem/OrdersItem';
import OrderProductList from '../OrderProductList/OrderProductList';
import {connect} from 'react-redux'
import {AddNewOrder} from '../../../store/action/OrdersAction'

function Orders(props) {

  function AddNewOrder(){
    let isFindNewKey = false
    let isTheSameKay = true
    let Key = 0
    while (isFindNewKey==false) {
      let min = 0
      let max = 1000000
      min = Math.ceil(min);
      max = Math.floor(max);
      Key = Math.floor(Math.random() * (max - min) + min)
      isTheSameKay = false
      for (let index = 0; index < Object.keys(props.Orders).length; index++) {
        if(Object.keys(props.Orders)[index]==Key)
          isTheSameKay= true
        
      }
      if(!isTheSameKay)
        isFindNewKey=true
        
    }
    
    var date = new Date().toLocaleString() 
      let item = {
            id: Key,
            date: date,
            title:"New order"+Key,
        }
        props.AddNewOrderAction(item)

  }
    return (
      <div className={style.Orders}>
        <div className={style.OrdersTopBar}>
          <div className={style.OrdersTopBarAddButton} onClick={AddNewOrder}>
            <img src={add}></img>
          </div>
          <div className={style.OrdersTopBarCounter}>
              Заказы / {Object.keys(props.Orders).length}
          </div>
        </div>
        <div  className={style.OrdersWorckSpace}>
          <div  className={style.OrdersListItem} style={{width:!props.ControInterface.OrderMenuOpen?"100%":"40%"}}>
            
            {
              Object.keys(props.Orders).map((id)=>{
                let count = 0
                let pryceUAN = 0
                let pryceD = 0
                for (let index = 0; index < Object.keys(props.Products).length; index++) {
                  if(props.Products[Object.keys(props.Products)[index]].order===id){
                    count++
                    
                    pryceUAN = pryceUAN + Number(props.Products[Object.keys(props.Products)[index]].price[1].value)
                    pryceD = pryceD + Number(props.Products[Object.keys(props.Products)[index]].price[0].value)
                  }
                    
                  
                }
                return(
                  <div key={id}>
                    <OrdersItem
                      key = {id}
                      Item = {props.Orders[id]}
                      count = {count}
                      pryceUAN = {pryceUAN}
                      pryceD = {pryceD}
                    />
                  </div>

                )
              }
              )
            }

          </div>
          <OrderProductList
            display={!props.ControInterface.OrderMenuOpen?false:true}
          />
        </div>

      </div>
    );
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      AddNewOrderAction:(item)=>dispatch(AddNewOrder(item)),
    };
  };
 
  const mapStateToProps = (store) => {

    return {
        ControInterface: store.ControInterface,
        Orders: store.Orders,
        Products: store.Products
    };
  };

  export default connect(
    mapStateToProps,
    mapDispatchToProps
    )(Orders)