import React, { Component, FC, useEffect, useState } from "react";

import './Socials.scss'

import github_logo from '../../../public/github_logo.png'
import linkedin_logo from '../../../public/linkedin_logo.png'
import twitter_logo from '../../../public/twitter_logo.png'
import email_icon from '../../../public/email_icon.png'

export const Socials: FC = () => {
    const github_url = 'https://github.com/myufa'
    const linkedin_url = 'https://www.linkedin.com/in/myufa/'
    const twitter_url = 'https://twitter.com/michaelyufa'
    const email_link = 'mailto: myufa@yahoo.com'
    return (
        <div className='Socials'>
            <a href={github_url} id='github' target='_blank'>
                <img 
                    src={github_logo} 
                    alt="github_logo"
                />
            </a>
            <a href={linkedin_url} id='linkedin' target='_blank'>
                <img 
                    src={linkedin_logo} 
                    alt="linkedin_logo"
                />
            </a>
            <a href={twitter_url} id='twitter' target='_blank'>
                <img 
                    src={twitter_logo} 
                    alt="twitter_logo"
                />
            </a>
            <a href={email_link} id='email' target='_blank'>
                <img 
                    src={email_icon} 
                    alt="email_icon"
                />
            </a>
        </div>
    )
}