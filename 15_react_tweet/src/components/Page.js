import React from 'react'
import Tweet from './Tweet'
import User from './User'

function Page() {
    return (
        <div className="page overflow-scroll mt-2 flex flex-col p-4 justify-start items-center">
            <Tweet comment='12' retweet='2' like='13' share='8'>
                <User user='David' text='incidunt tempore beatae eius voluptate laudantium?' />
            </Tweet> 
            <Tweet comment='2' retweet='21' like='3' share='6'>
                <User user='Sean avag' text='Ex qui dicta eveniet, fuga exercitationem a laborum error ab' />
            </Tweet>
            <Tweet comment='31' retweet='13' like='17' share='101'>
                <User user='Johnseen' text='corporis officiis sit amet consectetur adipisicing elit' />
            </Tweet>
            <Tweet comment='10' retweet='8' like='29' share='21'>
                <User user='Ruby' text='provident amet, Lorem ipsum dolor' />
            </Tweet>
            <Tweet comment='1' retweet='6' like='2' share='19'>
                <User user='Yoonjin Kim' text='hello world omnis deleniti ' />
            </Tweet>
        </div>
    )
}

export default Page