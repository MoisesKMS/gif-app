import React, {useEffect, useState} from 'react';
import { getGifs } from '../helpers/getGifs';
import GifGridItem from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs(category)
        // .then(imgs => setImages(imgs))
        .then(setImages)
    }, [category])

    

    
    return (
        <>
            <h3>{category}</h3>
            <div className="lista">
                {
                  images.map((img) => (
                      <GifGridItem 
                        key={img.id}
                        {
                            ...img
                        }
                      />
                  ))  
                }
            </div>
        </>
    )
}
