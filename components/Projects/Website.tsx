import React from 'react'
import Image from 'next/image';

type Props = {}

function website({ }: Props) {
    return (
        <div className='relative w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-4 md:p-0'>
            <Image
                className='relative w-full max-w-[230px] md:max-w-xl h-auto'
                src="personalWebsite.png"
                alt="Spotify App Clone Image"
                width={680}
                height={500}
            />
            <h4 className='text-2xl md:text-4xl text-center'>
                <span className='underline decoration-[#F7AB0A]'>Project 4</span>: Personal Website (TypeScript)
            </h4>
            <ul className="relative list-disc space-y-2 md:space-y-4 pl-5 max-h-[300px] overflow-auto">
                <li>Next.js, Typescript, Deployed through github pages</li>
            </ul>
        </div>
    )
}
export default website