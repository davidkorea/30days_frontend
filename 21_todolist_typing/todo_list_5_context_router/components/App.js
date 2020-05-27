import React from 'react'
import GlobalContextProvider from '../contexts/GlobalContext'
import Page from './Page'

function App() {
    return (
        <div className='flex items-center justify-center h-screen bg-gray-100'>
            <GlobalContextProvider>
                <Page></Page>
            </GlobalContextProvider>
        </div>
    )
}
export default App