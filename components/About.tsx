import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

export default function About({ }: Props) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-5 md:px-10 justify-evenly mx-auto items-center'>
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">about</h3>
            <motion.img src="updatedAboutPhoto.png" alt="Profile photo of Ricardo Cruz"
                className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px] xl:mt-[100px]"
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{
                    once: true
                }}
            />
            <div className="space-y-10 px-0 md:px-10">
                <h4 className="text-4xl font-semibold">
                    Get to know  {" "}
                    <span className="underline decoration-[#F7AB0A]/50">Ricardo</span>
                    {" "} a little better!
                </h4>
                <div className="max-h-60 overflow-auto p-2 border border-[#F7AB0A]/50 rounded-md md:border-0 md:max-h-96 md:overflow-visible">
                    <p className="text-base">
                        I am a passionate software developer with a solid foundation in computer science and a knack for creating efficient and scalable applications.
                        I hold a BSc in Computer Science from the University of Calgary, where I graduated with a 3.63 GPA, achieving distinction.
                        My professional journey includes valuable internships at ATB Financial, where I contributed to significant projects in both software development and DevOps.
                        <br />
                        <br />
                        At ATB Financial, I reimplemented a self-serve page for over 1,500 users, programmed a Q&A chatbot, and designed a calendar website integrated with Google Sheets and Firebase.
                        My DevOps internship honed my skills in managing GKE clusters, automating operations with bash scripts, and implementing CI/CD pipelines with Docker and Terraform.
                        <br />
                        <br />
                        I have a diverse skill set, including proficiency in Python, JavaScript, TypeScript, Java, C, C++, C#, HTML/CSS, and experience with MySQL, Google Cloud Platform, Firebase, and various frameworks like React.js, Angular, and Node.js.
                        My projects, such as the OverRatd Flask web app, DialedIn social media platform, Music Web App, and a real-time chat application, showcase my ability to tackle complex problems and deliver robust solutions.
                        <br />
                        <br />
                        I am always eager to learn and take on new challenges, striving to make a positive impact through technology.
                        Feel free to explore my personal website and GitHub for more insights into my work and projects.
                    </p>
                </div>
            </div>
        </motion.div>
    )
}