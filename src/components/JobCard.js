import React from 'react'
import '../styles.css'
import data from "../data.json";


export default function JobCard({ AddCategory }) {
  return (
      <>
        {data.map((data) => {
            return (
            <div key={data.id} className='card'>
                    <div className='logo'>
                        <img src={require(`/src/${data.logo}`)} alt='logo'></img>
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
                            <li><button onClick={() => AddCategory(`${data.role}`)}>{data.role}</button></li>
                            <li><button onClick={() => AddCategory(`${data.level}`)}>{data.level}</button></li>
                            {data.languages.map((languages, key) => {
                                return(
                                    <li key={key}><button onClick={() => AddCategory(`${languages}`)}>{languages}</button></li>
                                )
                            })}
                            {data.tools.map((tools, key) => {
                                return(
                                    <li key={key}><button onClick={() => AddCategory(`${tools}`)}>{tools}</button></li>
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
