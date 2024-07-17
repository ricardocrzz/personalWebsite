import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
type Props = {}

function Header({ }: Props) {
    function sendEmail() {
        const email = 'ricky1301@hotmail.com';
        const subject = 'Subject of your email';
        const body = 'Content of your email';
        const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.location.href = mailtoLink;
    }
    return (
        <header className='sticky top-0 flex items-start justify-between max-w-7xl mx-auto z-20
        xl:items-center p-5'>
            <motion.div initial={{
                x: -500,
                opacity: 0,
                scale: .5,
            }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}

                className='flex flex-row items-center'>
                <SocialIcon
                    url='https://www.linkedin.com/in/ricardo-cruz-a89191203/'
                    fgColor='grey'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://github.com/ricardocrzz'
                    fgColor='grey'
                    bgColor='transparent'
                />
            </motion.div>
            <motion.div initial={{
                x: 500,
                opacity: 0,
                scale: .5
            }}
                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}
                transition={{
                    duration: 1
                }}
                className="flex flex-row items-center text-gray-300 cursor-pointer ">
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    fgColor='grey'
                    bgColor='transparent'
                    onClick={sendEmail} // Add the onClick event handler
                />
                <a className="uppercase hidden md:inline-flex text-sm text-gray-400"
                    href='LatestResume.pdf' // Replace with the actual path to your resume file
                    download="resume-ricardo-cruz.pdf" // Specify the desired filename for the downloaded file
                >
                    Resume
                </a>
            </motion.div>
        </header>
    )
}

export default Header