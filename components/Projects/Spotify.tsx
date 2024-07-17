import React from 'react'
import Image from 'next/image';

type Props = {}

function Spotify({ }: Props) {
    return (
        <div className='text-centerrelative w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-4 md:p-0'>
            <Image
                className='relative w-full max-w-[230px] md:max-w-xl h-auto'
                src="https://www.online-tech-tips.com/wp-content/uploads/2022/07/how-to-see-your-friends-activity-on-spotify-1-compressed.jpg"
                alt="Spotify App Clone Image"
                width={680}
                height={500}
            />
            <h4 className='text-2xl md:text-4xl text-center'>
                <span className='underline decoration-[#F7AB0A]'>Project 3</span>: Spotify App Clone (JavaScript)
            </h4>
            <ul className="relative list-disc space-y-2 md:space-y-4 pl-5 max-h-[300px] overflow-auto">
                <li>Analyzed Spotify Web App to clone and develop a responsive front-end design with Material UI.</li>
                <li>Made user authentication available via the Spotify API, enabling retrieval of user information such as name,<br />
                    display picture, playlist names and complete song lists within each playlist.</li>
                <li>Established a data layer utilizing the React Context API for state management across multiple components.</li>
                <li>Leveraged the functionality of React Hooks, including UseState() and UseEffect().</li>
            </ul>
        </div>
    )
}

export default Spotify;
