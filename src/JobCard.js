import React from 'react'
import './styles.css'
import data from "./data.json";

export default function jobcard() {
  return (
      <>
        {data.map((data, key) => {
            return (
            <div key={key} className='card'>
                    <div className='logo'>
                        <img src={require(`${data.logo}`)} alt='logo'></img>
                    </div>
                    <div className='info'>
                        <p className='company'>{data.company}</p>
                        {data.new ? (<span className='new'>NEW!</span>)
                         : (null)}
                        {data.new ? (<span className='featured'>FEATURED</span>)
                         : (null)}
                        <div className='wrapper'><h1 className='position'>{data.position}</h1></div>
                        <p className='postedAt'>{data.postedAt}</p>
                        <p className='contract'>{data.contract}</p>
                        <p className='location'>{data.location}</p>
                    </div>
                    <div className='tags'>
                        <ul>
                            <li>{data.role}</li>
                            <li>{data.level}</li>
                            {data.languages.map((languages, key) => {
                                return(
                                    <li key={key}>{languages}</li>
                                )
                            })}
                            {data.tools.map((tools, key) => {
                                return(
                                    <li key={key}>{tools}</li>
                                )
                            })}
                        </ul>
                    </div>
            </div>
            );
        })}
    </>
  )
}
