import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function Card({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-0 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px]
        snap-center bg-[rgb(33,44,74)] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
            <motion.img
                initial={{
                    y: -100, opacity: 0
                }}
                whileInView={{
                    y: 0, opacity: 1
                }}
                transition={{
                    duration: 1.2
                }}
                viewport={{
                    once: true
                }}
                className="h-32 w-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/ATB_Jewel_Logo.png/1200px-ATB_Jewel_Logo.png" alt="" />
            <div className="px-0 md:px-10">
                <h4 className='text-4xl font-light'>ATB Financial</h4>
                <p className='font-bold text-2xl mt-1'>Software Developer Intern</p>
                <div className=""></div>
                <p className='uppercase py-5 text-gray-300'>Sep 2022 - April 2023</p>
                <ul className="list-disc space-y-4 ml-5 text-lg max-h-90 overflow-y-auto">
                    <li>Implemented self serve page that scaled to over 30,000 users, improving user efficiency by 81%.</li>
                    <li>Programmed a Q&A chat bot to be incorporated into Google Chats to assist over 5,000 employees.</li>
                    <li>Built a request portal for 7,000 users, reducing ticket resolution time by 86%.</li>
                    <li>Designed calendar website to extract data from Google Sheets to aid 12+ teams in effortlessly managing on-
                        call schedules through Firebase.</li>
                </ul>
            </div>
        </article>
    )
}

export default Card