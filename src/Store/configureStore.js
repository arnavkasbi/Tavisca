import { combineReducers } from "redux";
const initialState = {
    items : [{fname:"ABC", lname:"PQR", item:2, amount: 250},
            {fname:"ABC", lname:"PQR", item:2, amount: 250}],
    currentItem : null
  };
  
function itemList(state = initialState, action) {
    switch(action.type){
        case "SAVE_ITEM": 
            return {...state, items:[...state.items, action.data], currentItem : null} ;
        case "DELETE_ITEM":
            return {...state, items:action.data} ;
        case "UPDATE_ITEM":
            return {...state, items:action.data, currentItem : null} ;
        case "EDIT_ITEM" :
            return {...state, currentItem:action.data} ;
        default: 
            return initialState;  
    }
}
export default combineReducers({
    list:itemList
});


