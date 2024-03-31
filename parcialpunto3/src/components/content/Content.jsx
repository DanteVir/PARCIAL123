import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Content.css'
import mock from './mock.json'

export const Content = () => {

    const [data, setData] = useState([]);

    const handlerGetData = () => {
        axios.get("https://kpw1ch0aa1.execute-api.us-east-2.amazonaws.com/dev/project")
            .then((response => {
                console.log(response)
                setData(response.data.photos)
            }))
            .catch((error) => {
                console.log(error)
            })
    }

    useEffect(() => {
        //handlerGetData()
        setData(mock);
        console.log(data)
    }, [])

    return (
        <>
            <div className='container_content'>
                {
                    data.map((elemento) => {
                        return <div className='content_img'><img src={elemento.image} />
                        <div className="content_names"><input value={elemento.names}/></div>
                        <div className="content_telefono"><input value={elemento.telephone}/></div>
                        </div>
                    })
                 
                }

            </div>
        </>
    )
}
