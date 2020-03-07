import React from 'react'
import Like from './Like'
import Input from './Input'
import Frame from './Frame'

function App() {
    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <Frame name="frame">
                {/* <Like name="like"></Like>
                <Input name="input"></Input>
                <div>Frame Component in the App</div> */}
            </Frame>
        </div>
    )
}
export default App