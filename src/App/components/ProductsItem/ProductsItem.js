import style from './ProductsItem.module.css'
import {connect} from 'react-redux'
import ItemImage from '../../../style/image/avatar.png'
import ItemImage1 from '../../../style/image/CompanionCube.png'
import ItemImage2 from '../../../style/image/150px-Portal2_StorageCube.png'
import ItemImage3 from '../../../style/image/Portal2_ReflectionCube.png'
import ItemImage4 from '../../../style/image/Portal2_Turret_Defective.png'
import ItemImage5 from '../../../style/image/turret.png'

function ProductsItem(props){


    /// я використовую api яке має обмеження на запити до ньго, за кожним файлом потрібно робити окремий запит, тому я вирішив симулювати ці запити і викликати лише назви файлів з апі
    let photo 
    if(props.Item.photo==="CompanionCube.png"){
        photo = ItemImage1
    }
    if(props.Item.photo==="150px-Portal2_StorageCube.png"){
        photo = ItemImage2
    }
    if(props.Item.photo==="Portal2_ReflectionCube.png"){
        photo = ItemImage3
    }
    if(props.Item.photo==="Portal2_Turret_Defective.png"){
        photo = ItemImage4
    }
    if(props.Item.photo==="turret.png"){
        photo = ItemImage5
    }

    return(
        <div className={style.ProductsItem}>
            <div className={style.ItemCheckConteiner}>
                <div className={style.ItemCheck} style={{backgroundColor: props.Item.order!=='null'?"black":'green'}}>

                </div>
            </div>
            <div className={style.ItemImage}>
                <img src={photo} alt={ItemImage}></img>
            </div>
            <div className={style.ItemTitle}>
                <div  className={style.ItemTitleName}>
                    {props.Item.title}
                </div>
                <div  className={style.ItemTitleSN}>
                    {props.Item.serialNumber}
                </div>
            </div>
            <div className={style.ItemCheckLongConteiner} style={{color: props.Item.order!=='null'?"black":'green'}}>
                {props.Item.order!=='null'?"Заказан":"Свободен"}
            </div>
            <div className={style.ItemGuarantee}>
                <div className={style.ItemGuaranteeText}>
                    с {props.Item.guarantee.start}
                </div>
                <div className={style.ItemGuaranteeText}>
                    по {props.Item.guarantee.end}
                </div>
            </div>
            <div className={style.ItemPryce}>
                <div className={style.ItemPryceDolar}>
                    {props.Item.price[0].value}$
                </div>
                <div className={style.ItemPryceUAN}>
                    {props.Item.price[1].value}UAN
                </div>
            </div>
            <div className={style.ItemOrder}>

                {props.Item.Order===null?"_____":props.Orders[props.Item.order]!==undefined?props.Orders[props.Item.order].title:""}
                
            </div>
            <div className={style.ItemDate}>
                {props.Item.date}
            </div>
        </div>
    )
}
const mapStateToProps = (store) => {

    return {

        Orders: store.Orders,
 
    };
  };

  export default connect(
    mapStateToProps,
    )(ProductsItem)