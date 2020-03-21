import React, { useState, useRef, useEffect } from 'react'
import './Player.css'
import Progress from './Progress'
import *  as Icon  from 'react-feather'
import music from './music.mp3'

function Player(){

    const [playing, setPlaying] = useState(true);
    const [currTime, setCurrTime] = useState(0);
    const [totalTime, setTotalTime] = useState(0);
    const [speed, setSpeed] = useState(0)
    const playerRef = useRef()

    // useEffect(()=>{
    //     playerRef.current.addEventListener('timeupdate',timeupdate)
    //     return ()=>{
    //         playerRef.current.removeEventListener('timeupdate',timeupdate)
    //     }
    // })
    
    const timeupdate =()=>{
        // setTotalTime(Math.round( playerRef.current.duration))
        // setCurrTime(playerRef.current.currentTime)
        setTotalTime(()=>Math.round(playerRef.current.duration))
        setCurrTime(()=>Math.round(playerRef.current.currentTime))
    }
    const play = ()=>{
        // 不使用useRef，无法获取到audio对象
        playerRef.current.play() 
        setPlaying(false)
    }

    const pause = ()=>{
        playerRef.current.pause()
        setPlaying(true)
    }

    const handleFast = ()=>{
        let curSpeed = speed
        if (curSpeed<15){           // playbackRate max = 16
            setSpeed(curSpeed+1)
            playerRef.current.playbackRate += 1
            console.log(speed);
        }
    }

    const handleSlow = ()=>{
        let curSpeed = speed
        if(curSpeed>0){
            setSpeed(curSpeed-1)
            playerRef.current.playbackRate -= 1
            console.log(speed);
        }
    }

    return (
        <div className="frame select-none flex flex-col bg-gray-800 rounded-lg">
            <div className="img"></div>
            <div className="song text-gray-400 mt-4 ml-6">
                <div className="title  text-2xl">Try me now</div>
                <div className="author font-thin">David</div>
            </div>

            <audio ref={playerRef} src={music} onTimeUpdate={timeupdate}></audio>

            <div className="player flex flex-col justify-start items-center">
                <Progress currTime={currTime} totalTime={totalTime}></Progress>

                <div className="btn flex mt-2 text-gray-300 items-center justify-between">

                    <div className="slow flex self-end font-light cursor-pointer"
                         onClick={handleSlow} 
                    >
                        <Icon.MinusSquare size={20} className="mt-1"/>
                        <sup className="2x text-xs -ml-4">x{speed+1}</sup>
                    </div>

                    {
                        playing 
                            ? <div><Icon.PlayCircle 
                                onClick={play}
                                size={40} className="cursor-pointer" /></div>
                            : <div><Icon.PauseCircle 
                                onClick={pause}
                                size={40} className="cursor-pointer" /></div>
                    }

                    <div className="fast flex self-end font-light cursor-pointer"
                         onClick={handleFast}
                    >
                        <Icon.PlusSquare size={20} className="mt-1" />
                        <sup className="2x text-xs -ml-4 ">x{speed+1}</sup>
                    </div>
                </div>
            </div>
            {/* <audio controls>
                <source/> // 显示控制框
            </audio> */}
        </div>
    )
}

export default Player