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
                    href='https://profile-api-prod.s3.us-west-2.amazonaws.com/561458996_8fe48a0b-3a8d-4513-b72b-278bffd776fb?response-content-disposition=attachment%3Bfilename%3Dresume.pdf&response-content-type=application%2Fpdf&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230914T170036Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=AKIAZKXXDXTXZF2KYWCD%2F20230914%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Signature=7f0bb533ec131d08581b9d572ba7dffaa04d959dfbfa411b062e3e2e426ce70a' // Replace with the actual path to your resume file
                    download="resume-ricardo-cruz.pdf" // Specify the desired filename for the downloaded file
                >
                    Resume
                </a>
            </motion.div>
        </header>
    )
}

export default Header