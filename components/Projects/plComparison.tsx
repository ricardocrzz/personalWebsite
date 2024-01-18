import React from 'react'
import Image from 'next/image';
type Props = {}

function Chat({ }: Props) {
    return (
        <div className=' relative w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center'>
            <Image
                className='relative pt-11 h-[300px]'
                src="https://nbcsports.brightspotcdn.com/dims4/default/950438a/2147483647/strip/true/crop/1570x1304+0+0/resize/843x700!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fcb%2F8a%2Fc3607b5b1e810adcb9163838534c%2Fscreenshot-2023-05-28-at-1-48-11-pm.png"
                alt="Chat Web App Image"
                width={300}
                height={300}
            />
            <h4 className='text-4xl'><span className='underline decoration-[#F7AB0A]'>Project 1</span>: Premier League Database Comparison (Python) *in progress*</h4>
            <ul className="relative list-disc space-y-4 ml-5 max-h-[300px]">
                <li>Working on an immersive website dedicated to Premier League Players, providing users with the unique capability to compare each player comprehensively.<br /> This encompasses player profiles, in-depth game statistics, and detailed salary information</li> <br />
                <li>Implementing a robust MySQL database to house player data, meticulously organized and managed through the Flask framework, leveraging the power of Python.<br /> This ensures a seamless and efficient backend infrastructure for data handling and retrieval</li> <br />
                <li>Employing Angular for the front-end architecture, enhancing the website's responsiveness and user interface.<br /> The use of Angular brings a dynamic and engaging visual experience to users, ensuring a smooth and interactive navigation throughout the website</li>
            </ul>
        </div>
    )
}

export default Chat