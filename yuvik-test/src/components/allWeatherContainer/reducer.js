import { GET_WEATHER } from "../../consts/actions";

const initialState = {weather: null};

export function allWeatherReducer(state = initialState, action){
    switch (action.type) {
        case GET_WEATHER:
            return {...state, weather: action.payload}
        default: 
            return {...state}
    }
}