import React, { useState, useEffect } from 'react'
import './style.css'
import Phone from './Phone'
import Intros from './Intros'
import Chapters from './Chapters'
import AvatarList from './AvatarList'
import ChapterItem from './ChapterItem'
import AvatarItem from './AvatarItem'

function App() {

    const [chapters, setChapters] = useState([]);
    const chapter_url = 'https://rickandmortyapi.com/api/episode'
    useEffect(() => {
        var all = ''
        fetch(chapter_url).then(res=>res.json()).then(data=>{
            data.results.map(v=>{
                let id = v.id
                let avatar_url_list = v.characters
                let obj = {id:id, avatar_url_list:avatar_url_list}
                // console.log(obj);
                all += JSON.stringify(obj) + '\\'
            })
            // console.log(all);
            let obj_list = all.split('\\')
            let clean_obj_list = obj_list.slice(0,obj_list.length-1)
            let new_obj_list = clean_obj_list.map(v=>eval("(" + v + ")"))
            // console.log(new_obj_list);
            setChapters(new_obj_list)
            setAvatarList(new_obj_list[0].avatar_url_list)
        })
    }, []);

    const [avatarList, setAvatarList] = useState([]);
    const handleChapter = id => {
        console.log(id);
        let avatar_urls = chapters[id-1].avatar_url_list
        setAvatarList(avatar_urls)
        // var temp = ''
        // avatar_urls.map(v=>{
        //     fetch(v).then(res=>res.json()).then(data=>{
        //         let img_url = data.image    
        //         // console.log(img_url);
        //         temp += img_url + ','
        //         console.log(temp);
        //     })  
        // })
        // 此处，统一搞不出来，不能一次性将所有任务图片集中保存至状态变量
        // 因此，将每个任务卡片的全部信息的url传到该卡片的组件上
        // 所以，单个任务卡片组件，就只有当下自己人物信息的链接
        // fetch此链接，直接将全部返回信息（图片链接以及名称性别等信息），set状态
        // 使用任务信息时，直接从上面等状态中引用对应字段信息即可
        // avatar_urls中有多少个url，就有多少个任务，就系要多少个任务卡片子组件
        // 根据不同人物的URL，给到不同任务卡片子组件，在子组件内部请求url，并将数据保存到子组件本地状态变量，直接使用
    }

    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <Phone>
                <Intros></Intros>
                <Chapters>
                    {
                        chapters.map(v=><ChapterItem chapter_id={v.id} handleChapter={handleChapter} key={v.id} />)
                    }

                </Chapters>
                <AvatarList>
                    {
                       avatarList.slice(5,avatarList.length).map((v,i)=><AvatarItem url={v} key={i+1}></AvatarItem>)
                    }

                </AvatarList>
            </Phone>
        </div>
    )
}
export default App