import axios from 'axios'
const rest_api_key ="dcL2FcVrHdQOoCWQXDWQX5"
const DataBaseId = "dcGwX2dCjcWPRcQmoZWQH0"

const urlAllProduct ="https://quintadb.com.ua/apps/dcGwX2dCjcWPRcQmoZWQH0/dtypes/entity/cWgSk3sGrgAyo2WOtdI8on.json?rest_api_key=dcL2FcVrHdQOoCWQXDWQX5"
const urlDeleteOrder="https://quintadb.com.ua/dtypes/confirm_action/dcGwX2dCjcWPRcQmoZWQH0/cWgSk3sGrgAyo2WOtdI8on.json?rest_api_key=dcL2FcVrHdQOoCWQXDWQX5"
const entitieProductsId = "cWgSk3sGrgAyo2WOtdI8on"

const ProductSerialNumberId = "bmxSk8msbeyA7dRSokvmkj"
const ProductPhotoId = "dcN8kyFGPkW6tdP3HrbSkZ"
const ProductPhotoId_original= "dcN8kyFGPkW6tdP3HrbSkZ_original"
const ProductTitleId = "dcPs3dTrndBOkYrcSPWQK0"
const ProductTypeId = "ddVNFdTCnculFcTSkKWPu2"
const ProductOrderId = "ddJ8k5xCnkWOJcKX7cM8kV"
const ProductSpecificationId = "bpW5dcJ2HagQxdL8kFeruk"
const ProductQuaranteeStartId = "assCkpWPjcN4kydKtdRXuc"
const ProductQuaranteeEndId = "cmW6TzWO1dLQSAywuRWOyO"
const ProductPriceUAHId = "cRW7b6yv9gW5ufpCkmB8kY"
const ProductPriceUSDId = "bBWQ5lvcjfW5b8W7DJC8kN"
const ProductDateId = "bzD8oWs8nexADTuttdHSow"



export function FirstInitProducts(){
    return async function(dispatch){
        const response = await axios.get(urlAllProduct)
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

                for (let index = 0; index < response.data.records.length; index++) {
                    
                    tempState = {
                        ...tempState,
                        [response.data.records[index].id]:{
                            id: response.data.records[index].id,
                            serialNumber: response.data.records[index].values[ProductSerialNumberId],
                            photo_original: response.data.records[index].values[ProductPhotoId_original],
                            photo: response.data.records[index].values[ProductPhotoId],
                            title: response.data.records[index].values[ProductTitleId],
                            type: response.data.records[index].values[ProductTypeId],
                            specification: response.data.records[index].values[ProductSpecificationId],
                            guarantee: {
                              start: response.data.records[index].values[ProductQuaranteeStartId],
                              end: response.data.records[index].values[ProductQuaranteeEndId]
                            },
                            price: [
                              {value: response.data.records[index].values[ProductPriceUSDId], symbol: 'USD'},
                              {value: response.data.records[index].values[ProductPriceUAHId], symbol: 'UAH'}
                            ],
                            order: response.data.records[index].values[ProductOrderId],
                            date: response.data.records[index].values[ProductDateId]
                        }
                    }

                }
                dispatch({
                    type: "CONNECYION_SUCCESS",
                  });
                dispatch({
                    type: "SET_ALL_PRODUCTS",
                    payload: tempState,
                });

            }

    }
}




export function SetProductNewOrder(dataOrderIdProductId){
  return async function(dispatch){
    let urlPutNewOrder ="https://quintadb.com.ua/apps/dcGwX2dCjcWPRcQmoZWQH0/dtypes/"+dataOrderIdProductId.ProductId+".json?rest_api_key=dcL2FcVrHdQOoCWQXDWQX5"
    let responsePut = await axios.put(urlPutNewOrder,{
      "rest_api_key":rest_api_key, "values":{
        [ProductOrderId]:dataOrderIdProductId.OrderId
      }
    }).catch(function (error) {
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
    if(responsePut!==undefined)
      if(responsePut.data!==undefined){
        const response = await axios.get(urlAllProduct)
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

                for (let index = 0; index < response.data.records.length; index++) {
                    
                    tempState = {
                        ...tempState,
                        [response.data.records[index].id]:{
                            id: response.data.records[index].id,
                            serialNumber: response.data.records[index].values[ProductSerialNumberId],
                            photo_original: response.data.records[index].values[ProductPhotoId_original],
                            photo: response.data.records[index].values[ProductPhotoId],
                            title: response.data.records[index].values[ProductTitleId],
                            type: response.data.records[index].values[ProductTypeId],
                            specification: response.data.records[index].values[ProductSpecificationId],
                            guarantee: {
                              start: response.data.records[index].values[ProductQuaranteeStartId],
                              end: response.data.records[index].values[ProductQuaranteeEndId]
                            },
                            price: [
                              {value: response.data.records[index].values[ProductPriceUSDId], symbol: 'USD'},
                              {value: response.data.records[index].values[ProductPriceUAHId], symbol: 'UAH'}
                            ],
                            order: response.data.records[index].values[ProductOrderId],
                            date: response.data.records[index].values[ProductDateId]
                        }
                    }

                }
                dispatch({
                    type: "CONNECYION_SUCCESS",
                  });
                dispatch({
                    type: "SET_ALL_PRODUCTS",
                    payload: tempState,
                });

            }

      }
  }
}


export function DeleteOrderProductsAll(ProductIdArray){
  return(
    async function(dispatch){
     let responsePut = await axios.post(urlDeleteOrder,{
      rest_api_key:rest_api_key,
      confirm_action: "update",
      entity_id: entitieProductsId,
      app_id:DataBaseId,
      dtype_ids:ProductIdArray,
      update_id:ProductOrderId,
      update_term:"null"
     }).catch(function (error) {
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
    if(responsePut!==undefined)
      if(responsePut.data!==undefined){

        const response = await axios.get(urlAllProduct)
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

                for (let index = 0; index < response.data.records.length; index++) {
                    
                    tempState = {
                        ...tempState,
                        [response.data.records[index].id]:{
                            id: response.data.records[index].id,
                            serialNumber: response.data.records[index].values[ProductSerialNumberId],
                            photo_original: response.data.records[index].values[ProductPhotoId_original],
                            photo: response.data.records[index].values[ProductPhotoId],
                            title: response.data.records[index].values[ProductTitleId],
                            type: response.data.records[index].values[ProductTypeId],
                            specification: response.data.records[index].values[ProductSpecificationId],
                            guarantee: {
                              start: response.data.records[index].values[ProductQuaranteeStartId],
                              end: response.data.records[index].values[ProductQuaranteeEndId]
                            },
                            price: [
                              {value: response.data.records[index].values[ProductPriceUSDId], symbol: 'USD'},
                              {value: response.data.records[index].values[ProductPriceUAHId], symbol: 'UAH'}
                            ],
                            order: response.data.records[index].values[ProductOrderId],
                            date: response.data.records[index].values[ProductDateId]
                        }
                    }

                }
                dispatch({
                    type: "CONNECYION_SUCCESS",
                  });
                dispatch({
                    type: "SET_ALL_PRODUCTS",
                    payload: tempState,
                });

            }

        }
    }
  )
}