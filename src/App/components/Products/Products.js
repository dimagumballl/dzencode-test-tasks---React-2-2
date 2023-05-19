import style from './Products.module.css'
import ProductsItem from '../ProductsItem/ProductsItem';
import { connect } from 'react-redux';
import {useState} from 'react'

function Products(props) {
  let [Type, SetType] = useState("All")
  let [Specification, SetSpecification] =useState("All")
    return (
      <div className={style.Products}>
        <div className={style.ProductsTopBar}>
          <div className={style.Counter}>
              продукты / {Object.keys(props.Products).length} 
          </div>
          <div className={style.FilterType}>
            Тип:
            <select onChange={(event)=>SetType(event.target.value)} value={Type} selected={Type}>
              <option selected value="All">All</option>
              <option value="Cube">Cube</option>
              <option value="turret">Turret</option>
            </select>
          </div>
          <div className={style.FilterSpecification}>
            Спецификация:

            <select onChange={(event)=>SetSpecification(event.target.value)} value={Specification} selected={Specification}>
              <option selected  value="All">All</option>
              <option value="Redirection" style={{display:Type==="turret"?"none":"inline"}}>Redirection</option>
              <option value="Storage" style={{display:Type==="turret"?"none":"inline"}}>Storage</option>
              <option value="Companion" style={{display:Type==="turret"?"none":"inline"}}>Companion</option>
              <option value="default" style={{display:Type==="Cube"?"none":"inline"}}>Default</option>
              <option value="defective" style={{display:Type==="Cube"?"none":"inline"}}>Defective</option>
            </select>
          </div>
        </div>
        <div className={style.ProductsListItem}>
          {
            Object.keys(props.Products).map((id)=>{
              if(Type==="All"){
                if(Specification==='All'){
                  return(
                    <div key={id}>
                      <ProductsItem
                        Item = {props.Products[id]}
                      />
                    </div>
                  )
                }
              }
              else if(Type===props.Products[id].type){
                if(Specification==='All'){
                  return(
                    <div key={id}>
                      <ProductsItem
                        Item = {props.Products[id]}
                      />
                    </div>
                  )
                }
                else if(Specification===props.Products[id].specification){
                  return(
                    <div key={id}>
                      <ProductsItem
                        Item = {props.Products[id]}
                      />
                    </div>
                  )
                }
              }

            }


            )
          }

        </div>
      </div>
    );
  }
  


  const mapStateToProps = (store) => {
  
    return {
      Products: store.Products,
    };
  };
  export default connect(
    mapStateToProps,
    )(Products)
  