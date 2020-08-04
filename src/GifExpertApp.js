import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
// import ReactDom from 'react-dom';

export const GifExpertApp = () => {

    // const cartegories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategories] = useState(['Today']);

    // const handleAdd = () => {

    //     // Dos formas de agregar elementos al array
    //     // setCategories( [...categories, 'HunterXHunter'] );
    //     setCategories( cats => [ ...cats, 'GOT'] );
    // }
    
    return (
        <>
            <h2>Buscador de GIFS TheValens</h2>
            <hr />

            <AddCategory setCategories={ setCategories }></AddCategory>

            <ol>
                {
                    categories.map( (category) =>  (                        
                        <GifGrid 
                            key={ category }
                            category={category}
                        />
                    ))
                }
            </ol>

        </>
    );
}

