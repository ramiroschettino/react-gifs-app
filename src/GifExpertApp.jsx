import React, { useState } from 'react'
import { AddCategory, GifsGrid } from './Components/';


export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([]);

    const onAddCategorie = ( newCategory ) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories ]);
    }

    return (
        
        <>  
        <h1>GifExpertApp</h1>

        <AddCategory onNewCategory={ onAddCategorie } />
        

        {
            categories.map( (category) => 
                (
                    <GifsGrid 
                    key={ category } 
                    category={ category }
                    />
                ))
        }
        
        

        </>
    )
}
