import React from 'react'
import Image from 'next/image';

type Props = {}

function LinkedIn({ }: Props) {
    return (
        <div className='relative w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-4 md:p-0'>
            <Image
                className='relative w-full max-w-[230px] md:max-w-xl h-auto'
                src="dialedIn.png"
                alt="Dialed In"
                width={680}
                height={500}
            />
            <h4 className='text-2xl md:text-4xl text-center'>
                <span className='underline decoration-[#F7AB0A]'>Project 2</span>: Dialed In (JavaScript)
            </h4>
            <ul className="relative list-disc space-y-2 md:space-y-4 pl-5 max-h-[300px] overflow-auto">
                <li>Created a responsive social media web app similar to LinkedIn.</li>
                <li>Integrated a Firebase back-end functionality API to develop user profiles.</li>
                <li>Enhanced security through email and password authentication for the landing page via Firebase Console.</li>
                <li>Implemented real time post threads using React Hooks for refreshing website snapshots.</li>
                <li>Resolved prop drilling issues by introducing Redux for seamless data payload flow management.</li>
                <li>Established connection to Firebase Hosting enabling concurrent usage by multiple users.</li>
            </ul>
        </div>
    )
}
export default LinkedIn
