import React from 'react'
import './Phone.css'
import Header from './Header'
import Page from './Page'

function Phone(){
    return(
        <div>
            <div className="phone flex justify-center items-start p-6">
                <div className="inner pb-2 rounded-lg flex flex-col justify-center items-center">
                    <Header />
                    <Page />
                </div>
            </div>
        </div>
    )
}

export default Phone