import axios from "axios";
import { GET_COUNTRIES, URL_BASE_PAIS, GET_COUNTRY_BY_ID } from "./constantes";

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
