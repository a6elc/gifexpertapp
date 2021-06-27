import React, { useState } from 'react'
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    // manejar la escritura en el input
    const handleInputChange = ( e ) => {
        setinputValue( e.target.value );
    }

    // manejar el intro
    const handleSubmit = ( e ) => {

        e.preventDefault();

        if (inputValue.trim().length > 2) {
            setCategories( cats => [ inputValue, ...cats ]); // operador spread
            setinputValue('');
        }
      //  console.log('Done!')
    }

    return (
        <>
            {/*    <h1>{ inputValue }</h1> */}
            <form onSubmit={ handleSubmit }>
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </form>
        </>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
