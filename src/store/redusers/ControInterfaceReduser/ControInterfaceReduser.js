

const initialState = {
    OrderMenuOpen: false,
    OrederMenuId: null,
    DeleteMenuOpen:false,
    OrderDeleteId: null
};

export function ControInterfaceReduser(state = initialState, action) {

    switch (action.type){
        case "OPEN_ORDERMENU":

            return {
                ...state,
                OrderMenuOpen:!state.OrderMenuOpen?!state.OrderMenuOpen:state.OrederMenuId===action.payload?!state.OrderMenuOpen:state.OrderMenuOpen,
                OrederMenuId:action.payload
           };
        case "SET_ORDERMENUID":
            return {
                ...state,
            };
        case "CLOUSE_ORDERMENU":
            return{
                ...state
            }

                default:
                    return state;
    }
}
