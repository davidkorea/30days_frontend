import React, { useState } from 'react'
import './css.css'
import Nav from './Nav'
import Show from './Show'
import Keys from './Keys'
import Footer from './Footer'


 function Phone(){

    const [inputNums, setInputNums] = useState('')

    const keyClick = (e)=>{
        console.log(e.target.innerHTML);
        const num = e.target.innerHTML
        setInputNums(inputNums.concat(num))
    }

    const deleteClick = ()=>{
        console.log('delete')
        setInputNums(inputNums.slice(0,-1))
    }

    const handleChange = ()=>{
        console.log('hi')
    }

     return (
         <div className="phone flex justify-center items-center bg-gray-100">
            <div className="pad flex flex-col rounded-lg">
                <div className="nav">
                    <Nav></Nav>
                </div>

                <div className="show">
                    <Show inputNums={inputNums} 
                        handleChange={handleChange} 
                        numLength={inputNums.length}
                    ></Show>
                </div>
                <div className="keys select-none mt-5">
                    <Keys keyClick={e=>keyClick(e)} 
                        deleteClick={deleteClick} 
                        numLength={inputNums.length}
                    ></Keys>
                </div>
                <div className="footer">
                    <Footer></Footer>
                </div>                           
            </div>
         </div>
     )
 }
 export default Phone