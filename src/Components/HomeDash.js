import React, { useState } from 'react'
import './HomeDash.css'

const HomeDash = () => {

    const [apidata, setApidata] = useState([])

    const fetchApi = fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then((data) =>
            setApidata(data))
    return (
        <div className='homedash-container'>
            <div className='homedash-post'>
                {apidata.map((item) => (
                    <div className='homedash-map'>
                        <h2>{item.title}</h2> <p>{item.body}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default HomeDash