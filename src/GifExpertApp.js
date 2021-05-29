import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertAPP = () => {

    const [categorias, setCategorias] = useState(['Yuru Yuri', 'To Love-ru', 'Tearmoon Empire']);

    return (
        <>
            <h2>Gif Expert APP</h2>   
            <AddCategory setCategorias={setCategorias} />
            <hr />

            <ol>
                {
                    categorias.map(categoria => {
                        return <li key={categoria}>{categoria}</li>;
                    })
                }
            </ol>
        </>
    )
}