import React from 'react'
import img from "../images/icon-remove.svg"

export default function FilterBar( {category, RemoveCategory} ) {
  return (
    <>
        <div className='tags' id='filterbar'>
            <ul>
            {category.map((item) => {
                return (
                <li key={item}>{item}<button onClick={() => RemoveCategory(`${item}`)}><img src={img} alt='remove-icon'/></button></li>
                );
            })}
            </ul>
        </div>
            
    </>
  )
}
