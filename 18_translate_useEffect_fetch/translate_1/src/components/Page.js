import React, { Component } from "react";
import './Page.css'
class Page extends Component{
    constructor(props){
        super(props)
        this.state = {
            // input: '',
            translate: ''
        }
    }
    handleChange(e){
        // console.log(e.key);
        if(e.key == 'Enter'){
            var input = e.target.value
            // console.log(input);
            this.setState({
                // input: input,
                translate: 'translating...'
            })

            // var django_url = 'http://localhost:8000/api/'
            var url = 'https://googleapi-qeovm5m0u.now.sh/?msg=' + input            
            console.log(url);
            
            fetch(url).then(res=>{
                if(res.status !== 200){
                    console.log('no 200');
                }
                
                res.json().then(data=>{
                    console.log(data);
                    var trans_text = ''
                    for (var i of data.sentences){
                        console.log(i.trans);
                        trans_text += i.trans
                    }
                    this.setState({
                        translate: trans_text
                    })
                }).catch(err=>{
                    console.log('parse json err')
                    this.setState({
                        translate: 'translate file wrong...'
                    })
                })
            }).catch(err=>{
                console.log('request failed')
                this.setState({
                    translate: 'network goes wrong...'
                })
            })
        }
    }

    render(){
        return(
            <div className="page flex shadow-lg">
                <div className="left p-1 w-1/2 h-full bg-blue-400">
                    <textarea 
                    onKeyDown={(e)=>this.handleChange(e)}
                    name="left" className="resize-none w-full h-full outline-none p-2">
                    </textarea>
                </div>
                <div className="right p-1 w-1/2 h-full bg-teal-300">
                    <textarea 
                    value={this.state.translate}
                    name="right" className="resize-none w-full h-full outline-none p-2">
                    </textarea>
                </div>
            </div>
        )
    }
}
export default Page