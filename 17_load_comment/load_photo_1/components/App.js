import React, { Component } from 'react'
import Page from './Page'
import Photo from './Photo'

class App extends Component {
    constructor(props){
        super(props)
        this.state = {
            idx: 0,
            imgList: [
                {id:1, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
                {id:2, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
                {id:3, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
                {id:4, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
                {id:5, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
                {id:6, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
                {id:7, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
                {id:8, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
                {id:9, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
                {id:10, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
                {id:11, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
                {id:12, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
                {id:13, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
                {id:14, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
                {id:15, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
                {id:16, src:"https://i.pravatar.cc/100?u=" + Math.floor(Math.random()*100)  },
            ],
            imgListSlice: []
        }
    }

    handleClick(){
        this.setState({
            idx: this.state.idx + 4,
            imgListSlice: this.state.imgList.slice(0, this.state.idx)
        })
    }

    render(){
        return (
            <div className='flex items-center justify-center h-screen bg-gray-100'>
                <Page>
                    {this.state.imgListSlice.map((v, i)=>(
                        <Photo key={v.id} src={v.src}></Photo>
                    ))}

                    <div 
                    onClick={()=>this.handleClick()}
                    className="boxload w-24 h-24 mr-1 mt-1 border-2 text-2xl 
                    text-gray-500 flex justify-center items-center select-none 
                    hover:text-blue-700 hover:shadow">◦◦◦</div>
                </Page>
            </div>
        )
    }
}
export default App