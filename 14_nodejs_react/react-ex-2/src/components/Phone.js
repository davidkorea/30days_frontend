import React from 'react'
import './Phone.css'
import Header from './Header'
import Content from './Content'
function Phone(){
    return (
        <div className="phone">
            <div className="phoneImg p-8 flex flex-col justify-start items-center">
                <Header />
                <div className="inner overflow-scroll mt-2 rounded-lg">
                    <Content />
                    <Content />
                    <Content />
                    <Content />
                </div>
            </div>
        </div>
        
    )
}

export default Phone