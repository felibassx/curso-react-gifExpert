import { useState, useEffect} from "react"
import { getGifs } from "../helpers/getGifs";


// custom Hooks
export const useFetchGifs = (category) => {

    const [state, setstate] = useState({
        data: [],
        loading: true
    });

    // useEffect previene que se ejecute la funcion getGif en cada render, se ejecuta
    // solo cuando el componente es renderizado la primera vez
    useEffect( () => {
        getGifs( category )
            .then(imgs => {
                setstate({
                    data: imgs,
                    loading: false
                })
            })
            // .then( imgs => setImages(imgs) )
    }, [category]);

    return state;

}