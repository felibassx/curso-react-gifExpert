
import React, { useState } from 'react'
import PropTypes from "prop-types";

export const AddCategory = ( {setCategories} ) => {


    const [inputValue, setValue] = useState('');
    const handleInputChange = ( e ) => {
        setValue(e.target.value);
    }
    const handleSubmit = (e) => {

        e.preventDefault();

        if( inputValue.trim().length > 2 ) {

            setCategories(cats => [ inputValue, ...cats ]);
            setValue('');

        }
       

    }

    return (
        <form onSubmit={ handleSubmit }>
            <br />
            <label>Buscar Gifs</label>
            <br />
            <br />
            <input 
                placeholder="Escribe aquí tu búsqueda, luego presiona enter"
                type="text" 
                value={ inputValue } 
                onChange={ handleInputChange }
            ></input>
            <br />
            <br />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
