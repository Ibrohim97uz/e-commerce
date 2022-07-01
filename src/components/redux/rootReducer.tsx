import { actionType } from "../../types";

const initialState = {
  selectedCategory: null,
};

export const RootReducer = (state = initialState,action:actionType)=>{
    switch(action.type){
        case 'CATEGORY':
        return {...state,selectedCategory:action.payload}

        default:
            return state
    }
}
