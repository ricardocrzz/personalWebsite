import React from 'react'
import Image from 'next/image';

type Props = {}

function Chat({ }: Props) {
    return (
        <div className='relative w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-4 md:p-0'>
            <Image
                className='relative w-full max-w-[230px] md:max-w-xl h-auto'
                src="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/c6934e71912953.5c06ef9ec579c.png"
                alt="Chat Web App Image"
                width={680}
                height={500}
            />
            <h4 className='text-2xl md:text-4xl text-center'>
                <span className='underline decoration-[#F7AB0A]'>Project 3</span>: Web Chat App (JavaScript)
            </h4>
            <ul className="relative list-disc space-y-2 md:space-y-4 pl-5 max-h-[300px] overflow-auto">
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
