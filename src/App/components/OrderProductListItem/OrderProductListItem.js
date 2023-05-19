
import style from './OrderProductListItem.module.css'


import ItemImage from '../../../style/image/avatar.png'
import ItemImage1 from '../../../style/image/CompanionCube.png'
import ItemImage2 from '../../../style/image/150px-Portal2_StorageCube.png'
import ItemImage3 from '../../../style/image/Portal2_ReflectionCube.png'
import ItemImage4 from '../../../style/image/Portal2_Turret_Defective.png'
import ItemImage5 from '../../../style/image/turret.png'

function OrderProductListItem(props){

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
        <div className={style.OrderProductListItem}>
            <div className={style.ItemCheckConteiner}>
                <div className={style.ItemCheck}>

                </div>
            </div>
            <div className={style.ItemImage}>
                <img src={photo}></img>
            </div>
            <div className={style.ItemTitle}>
                <div  className={style.ItemTitleName}>
                    {props.Item.title}
                </div>
                <div  className={style.ItemTitleSN}>
                    {props.Item.serialNumber}
                </div>
            </div>
   
            <div className={style.ItemCheckLongConteiner} style={{color:props.colorB}} onClick={()=>props.fun(props.Item.id)}>
                {props.title}
            </div>
        </div>
    )
}
export default OrderProductListItem