import React from 'react'

type Props = {}

export default function Spotify({ }: Props) {
    return (
        <div className=' relative w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center'>
            <img className='relative pt-11 h-[300px]' src="https://www.online-tech-tips.com/wp-content/uploads/2022/07/how-to-see-your-friends-activity-on-spotify-1-compressed.jpg" alt="" />
            <h4 className='text-4xl'><span className='underline decoration-[#F7AB0A]'>Project 3</span>: Spotify App Clone (JavaScript)</h4>
            <ul className="relative list-disc space-y-4 ml-5 max-h-[300px]">
                <li>Analyzed Spotify Web App to clone and develop a responsive front-end design with Material UI.</li>
                <li>Made user authentication available via the Spotify API, enabling retrieval of user information such as name,<br />
                    display picture, playlist names and complete song lists within each playlist.</li>
                <li>Established a data layer utilizing the React Context API for state management across multiple components.</li>
                <li>Leveraged the functionality of React Hooks, including UseState() and UseEffect().</li>
            </ul>
        </div>
    )
}