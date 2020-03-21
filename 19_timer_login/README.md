# Mac Login

![Mar-21-2020 22-19-18](https://user-images.githubusercontent.com/26485327/77228395-134f1a00-6bc2-11ea-937f-5e00325f427e.gif)


<img width="1234" src="https://user-images.githubusercontent.com/26485327/77227921-a8501400-6bbe-11ea-8034-b98a0d491984.png">

# Timer


![Mar-16-2020 14-30-30](https://user-images.githubusercontent.com/26485327/76728851-c1a62a00-6792-11ea-8238-40c1e17a79e8.gif)


```javascript
import React, { useState, useEffect } from 'react'

function Timer(){
    const [count, setCount] = useState(0);
    useEffect(()=>{
        if(count == 0){
            const _time = prompt('Set you time: ')
            setCount(_time)
        }
    })

    useEffect(()=>{
        setTimeout(() => {
            console.log('hi');
            if(count>0){
                setCount(count-1)
            }
        }, 1000);
        
        // const timer = setInterval(() => {
        //     console.log('hi');
        //     if(count > 0){
        //         setCount(count-1)
        //     }
        // }, 1000);
        // return ()=>clearInterval(timer)
        // }, [count])
    })

    return (
        <div className="flex flex-col justify-center items-center text-gray-100">
            <div className="text text-3xl">Timer</div>
            <div 
                className="counter flex justify-center items-center mt-5 border-2 rounded w-20 h-16"
            >{count}</div>
        </div>
    )
}
export default Timer
```














