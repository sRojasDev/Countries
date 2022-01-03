// import { combineReducers } from "redux";
// const reducer= combineReducers({});

import { GET_COUNTRIES, GET_COUNTRY_BY_ID, GET_ACTIVITY, FILTER_BY_ACTIVITY } from "../constantes";


const initialState={
    paises:[],
    allCountries:[],
    actividades:[],
}

function rootReducer(state =initialState, action = {}){
    switch (action.type){ 
        case GET_COUNTRIES :
            return {
                ...state,
                paises: action.payload,
                allCountries: action.payload,
                error:false,
            }
            case GET_COUNTRY_BY_ID :
                return {
                    ...state,
                    paises: action.payload,
                }
        default:
            console.log("entro al default reducer");
            return state    
    }
}
export default rootReducer;