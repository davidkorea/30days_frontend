import React, { useState } from 'react'
import Phone from './Phone'
import Tweet from './Tweet'


function App() {
    const [tweetList, setTweetList] = useState([
        {id:1, name:'david', text:'Returns a stateful value, and a function to update it.', comment:12, share:3, like:9, liked:false},
        {id:2, name:'hello', text:'Random Face photos https://i.pravatar.cc/100', comment:2, share:3, like:2, liked:false},
        {id:3, name:'joy', text:'VScode css auto-complete https://marketplace.visualstudio.com/items?itemName=ecmel.vscode-html-css', comment:3, share:3, like:15, liked:false},
        {id:4, name:'Macbook', text:'JavaScript Event KeyCodes http://keycode.info', comment:16, share:3, like:1, liked:false},
        {id:5, name:'iPad', text:'Sets - Unicode® Character Table https://unicode-table.com/en/sets/', comment:23, share:0, like:7, liked:false},
        {id:6, name:'iPhone', text:'Returns a stateful value, and a function to update it.', comment:1, share:3, like:16, liked:false},
    ]);

    const handleLike = id => {
        console.log(id);
        let list = [...tweetList]   
        if(!list[id-1].liked){
            list[id-1].like += 1
            list[id-1].liked = true
        }else{
            list[id-1].like -= 1
            list[id-1].liked = false
        }     
        setTweetList(list)
    }

    return (
        <div className='flex select-none items-center justify-center h-screen bg-gray-100'>
            <Phone>
                {
                    tweetList.map(v=>{
                        return <Tweet value={v} handleLike={handleLike} key={v.id}></Tweet>
                    })
                }
            </Phone>
        </div>
    )
}
export default App