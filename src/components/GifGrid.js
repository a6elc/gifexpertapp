import React from 'react';
import { GifGridItem } from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

    const {data: images, loading} = useFetchGifs( category ); // data: images = renombrado
    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>
            { loading && <p className="card animate__animated animate__flash">Loading...</p> }
            <div className="card-grid">
                {
                    images.map(img => ( // desestructuración
                        <GifGridItem
                            key={img.id}
                            {...img} // se envia cada prop como una prop independiente
                        />
                    ))
                }
            </div>
        </>
    )
}
