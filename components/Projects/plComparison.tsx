import React from 'react';
import Image from 'next/image';

type Props = {}

function PlComparison({ }: Props) {
    return (
        <div className='relative w-screen h-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-4 md:p-0'>
            <Image
                className='relative w-full max-w-[230px] md:max-w-xl h-auto'
                src="overRated.png"
                alt="overRated"
                width={680}
                height={500}
            />
            <h4 className='text-2xl md:text-4xl text-center'>
                <span className='underline decoration-[#F7AB0A]'>Project 1</span>: overRated (Python)
            </h4>
            <ul className="relative list-disc space-y-2 md:space-y-4 pl-5 max-h-[300px] overflow-auto">
                <li>Working on an immersive website dedicated to Premier League Players,<br /> providing users with the unique capability to compare each player comprehensively.<br />
                    This encompasses player profiles, in-depth game statistics, and detailed salary information.</li>
                <li>Developed a MySQL schema for efficient storage of player information,<br />
                    incorporating transfer fees and key performance stats for comparative analysis in player acquisitions.</li>
                <li>Implemented CRUD operations for seamless user interaction with player records in the database.</li>
                <li>Introduced data visualization for comparative player analysis, aiding team management decisions.</li>
                <li>Utilized “pandas” for web scraping stats from fbref.com and automated adding the scraped data to the database.</li>
            </ul>
        </div >
    );
}

export default PlComparison;
