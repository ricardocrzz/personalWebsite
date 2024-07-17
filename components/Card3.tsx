import React from 'react'
import { motion } from "framer-motion"

type Props = {}

function Card({ }: Props) {
    return (
        <article className='flex flex-col rounded-lg items-center space-y-0 flex-shrink-0 w-full md:w-[600px] xl:w-[900px] max-w-[90vw]
        snap-center bg-[rgb(33,44,74)] p-5 md:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200'>
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
                src="data:image/png;base64,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" alt="" />
            <div className="px-0 md:px-5 lg:px-10">
                <h4 className='text-2xl md:text-4xl font-light'>Moxies Barlow</h4>
                <p className='font-bold text-xl md:text-2xl mt-1'>Server</p>
                <div className=""></div>
                <p className='uppercase py-3 md:py-5  text-gray-300'>April 2023-Current</p>
                <ul className="list-disc space-y-4 ml-5 text-base md:text-lg max-h-90 overflow-y-auto">
                    <li>Working as a full time server while also job hunting.</li>
                </ul>
            </div >
        </article >
    )
}
export default Card