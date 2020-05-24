import React, { useState, useEffect } from 'react'
import Phone from './Phone'
import AuthorInfo from './AuthorInfo'
import ContentList from './ContentList'
import NaviBar from './NaviBar'
import './style.css'
import VideoItem from './VideoItem' 
import { List } from 'react-feather'
import axios from 'axios'

function App() {
    const [videoList, setVideoList] = useState([
        {id:1, src:'url(https://i.picsum.photos/id/103/120/80.jpg)', count:49},
        {id:2, src:'url(https://i.picsum.photos/id/1015/120/150.jpg)', count:53},
        {id:3, src:'url(https://i.picsum.photos/id/1011/120/150.jpg)', count:26},
        {id:4, src:'url(https://i.picsum.photos/id/78/120/150.jpg?grayscale)', count:13},
        {id:5, src:'url(https://i.picsum.photos/id/1012/120/150.jpg)', count:10},
        {id:6, src:'url(https://i.picsum.photos/id/102/120/150.jpg)', count:7},
        {id:7, src:'url(https://i.picsum.photos/id/366/120/150.jpg)', count:7},
    ]);
    
    const [loadMoreList, setLoadMoreList] = useState([]);
    const [loadFlag, setLoadFlag] = useState(false);
    const [pointer, setPointer] = useState(0);

    useEffect(() => {
        var all = ''
        fetch("https://picsum.photos/v2/list?page=10&limit=80")
            .then(res=>res.json())
            .then(data=>{
                data.map(v=>{
                    let id = v.id
                    let src = v.download_url.split('/').slice(0,5)
                    let new_src = src.join('/') + '/120/150'
                    // console.log({id:id, src:new_src, count:Math.floor(Math.random(300)*1000)});
                    all += `{id:${id}, src:'url(${new_src})', count:${Math.floor(Math.random(300)*1000)}}\\`
                })

                let old_string_list = all.split("\\")
                let new_string_list = old_string_list.slice(0,old_string_list.length-1)
                let obj = new_string_list.map(v=>eval("(" + v + ")"))
                
                // console.log(typeof(obj),obj)
                setLoadMoreList(obj)  
            })
    }, []);

    const handleLoadMore = () => {
        console.log('hi');
        console.log(loadMoreList);
        setLoadFlag(true) 
        setPointer(pointer+9)
    }

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100 select-none'>
            <Phone>
                <AuthorInfo></AuthorInfo>
                <ContentList count={videoList.length + loadMoreList.length}>
                    {
                        videoList.map(v=><VideoItem value={v} key={v.id} />)
                    }
                    {
                        loadFlag? loadMoreList.slice(0,pointer).map(v=><VideoItem value={v} key={v.id} />) : null
                    }
                    <div onClick={()=>handleLoadMore()}
                        className="loadmore h-8 text-gray-700 mt-16 ml-5 cursor-pointer">Load more</div>
                </ContentList>
                <NaviBar></NaviBar>
            </Phone>
        </div>
    )
}
export default App