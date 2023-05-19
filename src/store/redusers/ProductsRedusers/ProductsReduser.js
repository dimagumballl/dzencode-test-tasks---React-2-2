

const initialState = {

};

export function ProductsReduser(state = initialState, action) {

    switch (action.type){
        
        case "SET_ALL_PRODUCTS":
            
            return {
                ...state,
                ...action.payload
           };

                default:
                    return state;
    }
}
