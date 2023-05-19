import axios from 'axios'

const rest_api_key="dcL2FcVrHdQOoCWQXDWQX5"
const DataBaseId = "dcGwX2dCjcWPRcQmoZWQH0"

const urlAllOrders ="https://quintadb.com.ua/apps/dcGwX2dCjcWPRcQmoZWQH0/dtypes/entity/ddTHecWR1bW77dICkXhSkK.json?rest_api_key=dcL2FcVrHdQOoCWQXDWQX5"

const urlDeleteOrder ="https://quintadb.com.ua/apps/dcGwX2dCjcWPRcQmoZWQH0/dtypes/entity/ddTHecWR1bW77dICkXhSkK.json?rest_api_key=dcL2FcVrHdQOoCWQXDWQX5"

const entitieOrdersId = "ddTHecWR1bW77dICkXhSkK"
const OrderDateId = "cTDI7cKvTdMzbiW5GDbmkE"
const OrderTitleId = "ddSmk7WQflWROsfeiJbeWx"

const urlAddNewOrder ="https://quintadb.com.ua/apps/dcGwX2dCjcWPRcQmoZWQH0/dtypes.json?rest_api_key=dcL2FcVrHdQOoCWQXDWQX5"


export  function FirstInitOrders(){

    return async function(dispatch){
        const response = await axios.get(urlAllOrders)
        .catch(function (error) {
            dispatch({
              type: "CONNECYION_FAIL",
            });
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
      
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
          if(response!==undefined)
            if(response.data!==undefined){

                let tempState = {

                }
                for (let index = 0; index < response.data.records.length; index++){
                    tempState = {
                        ...tempState,
                        [response.data.records[index].id]:{
                            id: response.data.records[index].id,
                            title: response.data.records[index].values[OrderTitleId],
                            date: response.data.records[index].values[OrderDateId],
                        }
                    }
                }
                dispatch({
                    type: "CONNECYION_SUCCESS",
                  });
                  dispatch({
                    type: "SET_ALL_ORDERS",
                    payload: tempState,
                });
            }
    }
}

export function AddNewOrder(order){
  return async function(dispatch){
    
    let responseAdd = await axios.post(urlAddNewOrder,{
      "rest_api_key":rest_api_key,
      "values":{
        "entity_id":entitieOrdersId,
        "id":order.id,
        [OrderTitleId]:order.title,
        [OrderDateId]:order.date
      }
    }
      ).catch(function (error) {
      dispatch({
        type: "CONNECYION_FAIL",
      });
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {

        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
    if(responseAdd!==undefined)
      if(responseAdd.data!==undefined){
        
        dispatch({
          type: "CONNECYION_SUCCESS",
        });


        const response = await axios.get(urlAllOrders).catch(function (error) {
          dispatch({
            type: "CONNECYION_FAIL",
          });
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
    
            console.log(error.request);
          } else {
            console.log('Error', error.message);
          }
          console.log(error.config);
        });
        if(response!==undefined)
          if(response.data!==undefined){

              let tempState = {

              }
              for (let index = 0; index < response.data.records.length; index++){
                  tempState = {
                      ...tempState,
                      [response.data.records[index].id]:{
                          id: response.data.records[index].id,
                          title: response.data.records[index].values[OrderTitleId],
                          date: response.data.records[index].values[OrderDateId],
                      }
                  }
              }
              dispatch({
                  type: "CONNECYION_SUCCESS",
                });
                dispatch({
                  type: "SET_ALL_ORDERS",
                  payload: tempState,
              });
          }



      }
  }
}




export function DeleteOrder(id){
  return async function(dispatch){
    const urlDeleteOrder ="https://quintadb.com.ua/apps/dcGwX2dCjcWPRcQmoZWQH0/dtypes/"+id+".json?rest_api_key=dcL2FcVrHdQOoCWQXDWQX5"
    let responseDelete = await axios.delete(urlDeleteOrder, {rest_api_key:rest_api_key})
    .catch(function (error) {
      dispatch({
        type: "CONNECYION_FAIL",
      });
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {

        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
    if(responseDelete!==undefined)
      if(responseDelete.data!==undefined){
        
        const response = await axios.get(urlAllOrders)
        .catch(function (error) {
            dispatch({
              type: "CONNECYION_FAIL",
            });
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            } else if (error.request) {
      
              console.log(error.request);
            } else {
              console.log('Error', error.message);
            }
            console.log(error.config);
          });
          if(response!==undefined)
            if(response.data!==undefined){
              console.log(response)
                let tempState = {

                }
                for (let index = 0; index < response.data.records.length; index++){
                    tempState = {
                        ...tempState,
                        [response.data.records[index].id]:{
                            id: response.data.records[index].id,
                            title: response.data.records[index].values[OrderTitleId],
                            date: response.data.records[index].values[OrderDateId],
                        }
                    }
                }
                dispatch({
                    type: "CONNECYION_SUCCESS",
                  });
                  dispatch({
                    type: "SET_ALL_ORDERS",
                    payload: tempState,
                });
            }
      }
  }
}