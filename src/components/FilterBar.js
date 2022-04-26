import React from 'react'
import img from "../images/icon-remove.svg"

export default function FilterBar( {category, RemoveCategory, RemoveAllCategories} ) {
  return (
    <>  {category.length !== 0 ?
        <div id='filterbar'>
            <ul>
            {category.map((item) => {
                return (
                <li key={item}>{item}<div><button onClick={() => RemoveCategory(`${item}`)}><img src={img} alt='remove-icon'/></button></div></li>
                );
            })}
            <li><button className='clear' onClick={RemoveAllCategories}>Clear</button></li>
            </ul>
        </div>
        : null}
    </>
  )
}
