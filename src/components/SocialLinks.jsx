import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import SocialLinksLi from './SocialLinksLi'


const SocialLinks = () => {
    return (
        <div className='hidden lg:flex flex-col top-[35%] left-0 fixed'>
            <ul>
                <SocialLinksLi name="LinkedIn" icon={<FaLinkedin size={30} />} href="#" />
                <SocialLinksLi name="GitHub" icon={<FaGithub size={30} />} href="#" />
                <SocialLinksLi name="Email" icon={<HiOutlineMail size={30} />} href="mailto:#" />
                <SocialLinksLi name="Resume" icon={<BsFillPersonLinesFill size={30} />} href="#" />
            </ul>
        </div>
    )
}

export default SocialLinks