import React, {useState} from 'react'
import Page from './Page'
import Comment from './Comment'

function App(){
    const dataList = [
        {name:'david', comment:'very good'},
        {name:'joyce', comment:'wow awesome!!!'}, 
        {name:'Mathew', comment:'can you send iot to me ?'},
        {name:'Honol', comment:'interesting'}, 
        {name:'Hawai', comment:'how to get the code'},
        {name:'John', comment:'lol'}]

    const [loadComment, setloadComment] = useState([]);
    const [idx, setidx] = useState(3);
    const handleClick = ()=>{
        setloadComment(dataList.slice(0,idx))
        setidx(idx+3)
    }

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <Page length={dataList.length}>
                { loadComment.map((v,i)=>{
                    return <Comment key={i} name={v.name} comment={v.comment}></Comment>
                })}
                <div 
                onClick={()=>handleClick()}
                className="loadmore select-none text-center font-light text-sm text-gray-600 mt-2 border-t-2">
                { idx>dataList.length ? 'No more comments' : 'Load More'}
                </div>
            </Page>
        </div>
    )
}

export default App