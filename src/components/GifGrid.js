import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
// import GifGridItem from './GifGridItem';
// import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({category}) => {

    // const [images, setImages] = useState([])
    const {loading} = useFetchGifs();
    //console.log(data);
    console.log(loading);
    // useEffect(() => {
    //     getGifs(category)
    //     // .then(imgs => setImages(imgs))
    //     .then(setImages)
    // }, [category])

    

    
    return (
        <>
            <h3>{category}</h3>
            {
                loading ? 'Cargando...' : 'Datos cargados'
            }
            {/* <div className="lista">
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
            </div> */}
        </>
    )
}
