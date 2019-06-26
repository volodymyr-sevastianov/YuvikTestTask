import { SET_UNITS } from "../../consts/actions";

const initialState = {units:"celsius"};

export default function settingsReducer(state = initialState, action){
    switch (action.type) {
        case SET_UNITS:            
            return {...state, units: action.payload}
        default:
            return {...state}
    }
}