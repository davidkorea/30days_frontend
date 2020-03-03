import React from "react"
import './Phone.css'
import header from './header.png'
import Card from './Card'

function Phone(){
    return (
        <div className="phone p-3 bg-gray-100 text-white shadow-xl rounded-lg">
            <img src={header} />
            <div className="card-list mt-8">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default Phone