import * as axios from 'axios'
import './new.css'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'

const client = axios.default;

async function showGet() {
    const response = await client.get('http://127.0.0.1:8080/api/114514/get_user/?phone=514')
    console.log('get')
    return response.data.data
}
async function showPost() {
    client.post('http://127.0.0.1:8080/api/add', {
        uid: 100,
        phone: 99,
        email: 200,
    }, {
        headers: {
            'Content-Type': 'application.json'
        }
    }).then((response) => console.log(response.status))
        .finally(console.log('post'))
}

export default function Base() {
    
    //useEffect({let ret=showGet()})
    console.log(1)
    let uid = 10
    return <>uid: {uid}</>
}


