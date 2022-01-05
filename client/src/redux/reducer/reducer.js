// import { combineReducers } from "redux";
// const reducer= combineReducers({});

import { GET_COUNTRIES, GET_COUNTRY_BY_ID, FILTER_ACTIVIDAD, FILTER_CONTINENTE, ORDEN_AZ, ORDEN_ZA, ORDEN_POBL_MAY, ORDEN_POBL_MENOR, GET_ACTIVITY } from "../constantes.js";


const initialState={
    paises:[],
    allCountries:[],
    actividades:[],
    detail:[],
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
                    detail: action.payload,
                }
            case FILTER_ACTIVIDAD:
                    let filterPaises = [];
                    state.paises.map(pa => {
                        
                        if(pa.activities.length) {
                            for (var i = 0; i < pa.activities.length; i++) {
                                if (pa.activities[i].name === action.payload) {
                                filterPaises.push(pa)
                                }
                            }
                        }
                    return false;
                    });
                    console.log('filterPaises', filterPaises);
                    return { ...state,
                        paises: filterPaises
                        }
            case FILTER_CONTINENTE:
                        if (action.payload === 'ALL') {
                            return {...state,
                                paises: state.allCountries 
                            }
                        }
                        else {
                            return {...state,
                                paises: state.allCountries.filter(p => {
                                return p.region === action.payload })}
                        }
            case GET_ACTIVITY:
                    return { ...state,
                            actividades: action.payload ,
            }
            case ORDEN_AZ:
                if(state.paises.length < 1){
                let newpaises = state.allCountries.sort(
                function (a, b) {
                    if (a.name > b.name) { return 1 }
                    if (a.name < b.name) { return -1 }
                    return 0;
                });
                    return { 
                    ...state,
                    paises: newpaises 
                    }
            }
                else{
                    let newPaises = state.paises.sort(function (a, b) {
                    if (a.name > b.name) { return 1 }
                    if (a.name < b.name) { return -1 }
                    return 0;
                });
                return { ...state, paises: newPaises }
            }
            case ORDEN_ZA:
                    if(state.paises.length < 1){
                        return {
                            ...state,
                            paises: state.allCountries.sort(function (a, b) {
                            if (a.name < b.name) { return 1; }
                            if (a.name > b.name) { return -1; }
                            return 0;
                            })
                        }}
                        else{
                            return {
                                ...state,
                                paises: state.paises.sort(function (a, b) {
                                if (a.name < b.name) { return 1; }
                                if (a.name > b.name) { return -1; }
                                return 0;})
                            }}
                case ORDEN_POBL_MAY:
                
                if(state.paises.length < 1){
                    return {
                        ...state,
                        paises: state.allCountries.sort(function (a, b) {
                            if (a.population < b.population) { return 1 }
                            if (a.population > b.population) { return -1 }
                            return 0;
                        })
                    }
                }
                else{
                    return {
                        ...state,
                        paises: state.paises.sort(function (a, b) {
                            if (a.population < b.population) { return 1 }
                            if (a.population > b.population) { return -1 }
                            return 0;
                        })
                    }
                }
            case ORDEN_POBL_MENOR:
                if(state.paises.length < 1){
                    return {
                        ...state,
                        paises: state.allCountries.sort(function (a, b) {
                            if (a.population < b.population) { return -1 }
                            if (a.population > b.population) { return 1 }
                            return 0;
                        })
                    }
                }
                else{
                    return {
                        ...state,
                        paises: state.paises.sort(function (a, b) {
                            if (a.population < b.population) { return -1 }
                            if (a.population > b.population) { return 1 }
                            return 0;
                        })
                    }
                }
        default:
            console.log("entro al default reducer");
            return state    
    }
}
export default rootReducer;