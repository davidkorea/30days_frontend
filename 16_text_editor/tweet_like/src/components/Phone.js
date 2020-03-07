import React, { Component } from "react";
import Header from './Header'
import Page from './Page'
import './Phone.css'

class Phone extends Component{
    render(){
        return (
            <div className="phone p-6">
                <div className="inner flex flex-col justify-start items-center rounded-lg">
                    <Header></Header>
                    <Page></Page>
                </div>
            </div>
        )
    }
}
export default Phone