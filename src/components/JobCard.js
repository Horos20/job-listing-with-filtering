import React from 'react'
import '../styles.css'
import data from "../data.json";


export default function JobCard({ category, AddCategory }) {
    function filteredData() {
        if (category.length === 0) {
            return data
        } else {
            let filteredData = []
            data.map(data => {
                let categories = [data.role, data.level]
                data.languages.map(language => (
                    categories.push(language)
                ))
                data.tools.map(tool => (
                    categories.push(tool)
                ))
                if (category.every(v => categories.includes(v))) {
                    filteredData.push(data)
                }
                return (null);
            })
            return filteredData;
        }
    }
  return (
      <>
        {filteredData().map((data) => {
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
                            <li><div><button onClick={() => AddCategory(`${data.role}`)}>{data.role}</button></div></li>
                            <li><div><button onClick={() => AddCategory(`${data.level}`)}>{data.level}</button></div></li>
                            {data.languages.map((languages, key) => {
                                return(
                                    <li key={key}><div><button onClick={() => AddCategory(`${languages}`)}>{languages}</button></div></li>
                                )
                            })}
                            {data.tools.map((tools, key) => {
                                return(
                                    <li key={key}><div><button onClick={() => AddCategory(`${tools}`)}>{tools}</button></div></li>
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
