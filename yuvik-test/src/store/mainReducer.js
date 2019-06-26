import { combineReducers } from 'redux'
import { allWeatherReducer } from "../components/allWeatherContainer/reducer";
import settingsReducer from "../components/settings/reducer";

const mainReducer = combineReducers({
    allWeatherReducer,
    settingsReducer
})

export default mainReducer;