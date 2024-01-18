import React from 'react'

type Props = {}

function Chat({ }: Props) {
    return (
        <div className=' relative w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center'>
            <img className='relative pt-11 h-[300px]' src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c6934e71912953.5c06ef9ec579c.png" alt="" />
            <h4 className='text-4xl'><span className='underline decoration-[#F7AB0A]'>Project 4</span>: Chat Web App (JavaScript)</h4>
            <ul className="relative list-disc space-y-4 ml-5 max-h-[300px]">
                <li>Built real time web chat app utilizing Express.js and Node.js as the back-end server framework.</li>
                <li>Integrated socket.io for seamless bi-directional communication between users in the same room, enabling instant<br />
                    messaging and dynamic color updates.
                </li>
                <li>Included captivating landing page featuring interactive input fields to enter username and customization for<br />
                    user’s message RGB color scheme, making each profile unique.</li>
            </ul>
        </div>
    )
}

export default Chat