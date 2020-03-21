import React from 'react'
import Phone from './Phone'


function App() {
    return (
        <div className='flex items-center justify-center h-screen'>
            <Phone></Phone>

            {/* <Router>
                <Link to="/">
                </Link>
                <Link to="/call/">
                    <Calling></Calling>
                </Link>
                <Route path="/" exact component={Phone}></Route>
                <Route path="/call/" exact component={Calling}></Route>
            </Router> */}
        </div>
    )
}
export default App