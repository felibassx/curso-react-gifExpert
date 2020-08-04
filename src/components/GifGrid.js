import React from 'react'
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/userFetchGifs';

export const GifGrid = ( { category } ) => {

    // const [images, setImages] = useState([]);
    const {data: images, loading} = useFetchGifs(category); 

    return (
        <>
            <h3 className="animate__animated animate__pulse">Mostrando {category}</h3>

            { loading && <p>Cargando...</p> }
            <div className="card-grid">                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={img.id}
                            { ...img }
                        />
                    ))
                }            
            </div>
        </>
    )
}
