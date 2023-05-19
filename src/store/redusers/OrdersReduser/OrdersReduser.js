

const initialState = {

};

export function OrdersReduser(state = initialState, action) {

    switch (action.type){
        case "SET_ALL_ORDERS":
            
            return {

                ...action.payload
           };

                default:
                    return state;
    }
}
