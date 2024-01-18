import React from 'react'

type Props = {}

export default function Spotify({ }: Props) {
    return (
        <div className=' relative w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center'>
            <img className='relative pt-11 h-[300px]' src="personalWebsite.png" alt="" />
            <h4 className='text-4xl'><span className='underline decoration-[#F7AB0A]'>Project 5</span>: Personal Website (TypeScript)</h4>
            <ul className="relative list-disc space-y-4 ml-5 max-h-[300px]">
                <li>Next.js, Typescript, Deployed through github pages</li>
            </ul>
        </div>
    )
}