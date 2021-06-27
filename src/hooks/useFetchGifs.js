// use = hooks

import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                });

            });
    }, [category]) // list = arreglo, si category cambia se vuelve a ejecutar este effect

    return state;
}
