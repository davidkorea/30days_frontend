import React from 'react'
import pizza from './pizza.png'
function Card(){
    return (
        <div className="card flex p-2 mt-8 bg-white shadow-xl rounded-lg">
            <img style={{marginTop:-40, marginLeft:-10}} className="w-32" src={pizza} />
            <div className="info m-2">
                <div className="title text-blue-900 font-bold">Good Pizza</div>
                <div className="dish-name text-gray-600">Beef Piaza</div>
                <div className="address text-gray-500">St.666 Avne</div>
            </div>
        </div>
    )
}

export default Card