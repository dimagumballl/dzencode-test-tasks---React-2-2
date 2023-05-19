import { combineReducers } from 'redux';
import {OrdersReduser} from './OrdersReduser/OrdersReduser'
import { ProductsReduser } from './ProductsRedusers/ProductsReduser';
import { ControInterfaceReduser } from './ControInterfaceReduser/ControInterfaceReduser';


export const rootReducer = combineReducers({

    Products:ProductsReduser,
    Orders:OrdersReduser,
    ControInterface: ControInterfaceReduser
});
