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
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/ATB_Jewel_Logo.png/1200px-ATB_Jewel_Logo.png" alt="" />
            <div className="px-0 md:px-5 lg:px-10">
                <h4 className='text-2xl md:text-4xl font-light'>ATB Financial</h4>
                <p className='font-bold text-xl md:text-2xl mt-1'>DevOps Intern</p>
                <div className=""></div>
                <p className='uppercase py-3 md:py-5  text-gray-300'>May 2022 - August 2022</p>
                <ul className="list-disc space-y-4 ml-5 text-base md:text-lg max-h-90 overflow-y-auto">
                    <li>Successfully managed 5+ GKE Cluster upgrades, ensuring smooth and uninterrupted operation of the
                        application while implementing the latest features, security patches and performance improvements.</li>
                    <li>Created bash scripts to automate various development, deployment and backup operations in GCP.</li>
                    <li>Implemented automated CI/CD Pipelines for deploying updated applications, significantly lowering
                        deployment time by up to a minute.</li>
                    <li>Utilized Docker containers to generate different images for various VM environments.</li>
                </ul>
            </div >
        </article >
    )
}
export default Card