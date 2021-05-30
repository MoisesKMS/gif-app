import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertAPP = () => {

    const [categorias, setCategorias] = useState([]);

    return (
        <>
            <h2>Gif Expert APP</h2>   
            <AddCategory setCategorias={setCategorias} />
            <hr />

            <ol>
                {
                    categorias.map(categoria =>
                        <GifGrid
                        key={categoria}
                        category={categoria}
                        />
                    )
                }
            </ol>
        </>
    )
}