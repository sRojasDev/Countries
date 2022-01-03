import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPaises } from "../redux/actions";

export default function Landing(){
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getPaises())
    }, [])
    return( 
        <div>
            <h2>Página De Bienvenida</h2>
            <Link to='home'>
                <button>Ingresar</button>
            </Link>
        </div>
    )
}