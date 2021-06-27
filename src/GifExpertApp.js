import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

const GifExpertApp = () => {

    const [categories, setCategories] = useState(['Dragon Ball']);
    /*    
       const handleAdd = () => {
           // setcategories( [...categories, 'HunterXHunter'] ); // ... spread
           setcategories( cats => [...categories, 'HunterxHunter']); // cats - callback
       }
    */
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories} />
            <hr />

            {/*  <button onClick={ handleAdd }>Agregar</button> */}

            <ol>
                {
                    categories.map(category => (
                       /*   return <li key={ category }> { category } </li> */
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>
        </>
    )
}

export default GifExpertApp;
