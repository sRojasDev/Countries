import axios from "axios";
import { GET_COUNTRIES, GET_ACTIVITY ,URL_BASE_PAIS,  GET_COUNTRY_BY_ID , FILTER_ACTIVIDAD, FILTER_CONTINENTE, ORDEN_AZ, ORDEN_ZA, ORDEN_POBL_MAY, ORDEN_POBL_MENOR} from "./constantes";

export function getPaises() {
    console.log("se despachó get Países");
    return function(dispatch){
        return axios.get(`${URL_BASE_PAIS}/countries`)
        .then(res => {dispatch({
                    type: GET_COUNTRIES,
                    payload: res.data,
                })
            });
    }
}
export function getCountryById(id) {
    console.log("se despachó get Países POR ID");
    return function(dispatch){
        return axios.get(`${URL_BASE_PAIS}/countries/${id}`)
        .then(res => {dispatch({
                    type: GET_COUNTRY_BY_ID,
                    payload: res.data,
                })
            });
    }
}

export function postActivity(){
    return async (dispatch) => {
        try {
            const api = await axios.post(`${URL_BASE_PAIS}/activity`)
            const res= api.data?.map(a=> a.nombre);
            return dispatch({
                type: "POST_ACTIVITY",
                payload: res,
            })
        }
        catch (error) { console.log(error) }
    }
}

export const loadActivity = () => {
    return async (dispatch) => {
        try {
            const api = await axios.get('/activity')
            const res= api.data?.map(a=> a.nombre);
            return dispatch({
                type: GET_ACTIVITY,
                payload: res,
            })
        }
        catch (error) { console.log(error) }
    }
};

export function orden_AZ(){
    return {
        type: ORDEN_AZ,
    };
};

export const orden_ZA = () => {
    return {
        type: ORDEN_ZA
    };
};

export const filter_Continente = (continente) => {
    return {
        type: FILTER_CONTINENTE,
        payload: continente
    };
};

export const filter_Actividad = (act) => {
    return {
        type: FILTER_ACTIVIDAD,
        payload: act
    };
};

export const orden_Pobl_MAY = (poblacion) => {
    return {
        type: ORDEN_POBL_MAY,
        payload: poblacion
    };
};
export const orden_Pobl_Menor = (poblacion) => {
    return {
        type: ORDEN_POBL_MENOR,
        payload: poblacion
    };
};
export const getCountryByName = (nombre, arrPaises) => {
    console.log("se despachó by Name "+nombre);
    
    // let result = arrPaises?.filter(el => {
    //         if (el.name.toLowerCase().includes(action.payload.toLowerCase())) {
    //         return el
    //     }
    // }) 
    // if result.length


    return {
        type: "GET_BY_NAME",
        payload: nombre
    };
};

