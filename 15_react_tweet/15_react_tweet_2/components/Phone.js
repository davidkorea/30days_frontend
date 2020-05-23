import React from 'react'
import './Phone.css'
import {BarChart, BatteryCharging} from 'react-feather'

function Phone(props){
    return (
        <div className="phone">
            <div className="frame-img p-8">
                <div className="frame-inner -mt-1 ml-1 rounded-lg">
                    <div className="top flex justify-between items-center">
                        <div className="time ml-4">11:32</div>
                        <div className="icons flex">
                            <div className="signal mr-2"><BarChart size="17" /></div>
                            <div className="battary mr-4"><BatteryCharging size="18" /></div>
                        </div>
                    </div>

                    <div className="main mt-4 overflow-scroll">
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Phone