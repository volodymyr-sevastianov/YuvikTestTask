import { SET_UNITS } from "../../consts/actions";

export default function setUnits(payload){
    return {
        type: SET_UNITS,
        payload: payload
    }
}