import React, { Component, FC, useEffect, useState } from "react";
import { WorkItem } from "./components/WorkItem";

import blind_date_demo from '../../../public/blind_date_demo.png'
import dexter_logo from '../../../public/dexter_logo.png'
import pearl_logo from '../../../public/pearl_logo.png'
import vibe_mill_logo from '../../../public/mill.svg'
import './Work.scss'

export const Work: FC<{setPage: (v: any) => void}> = ({setPage}) => {
    useEffect(() => {
        setPage(0)
    }, [])
    return (
        <div className='Work'> 
            <div className='subHeader'>                
                <div >
                Hi! I build cool things with code!</div>
                <div >
                Check out some of my work below</div>
            </div>
             
            
            <div className='title'>WORK</div>
            <div className='WorkItems'>
                <WorkItem id="blind_date">
                    <img src={blind_date_demo} alt="blind date"/>
                    <div className='WorkItemTitle'>Blind Date</div>
                    <div className='WorkItemSubTitle'>Mobile Dating App</div>
                    <div className='WorkItemRoll'>Founder&nbsp;/&nbsp;Engineer</div>
                </WorkItem>
                <WorkItem id="dexter">
                    <img src={dexter_logo} alt="dexter"/>
                    <div className='WorkItemTitle'>Dexter Learning</div>
                    <div className='WorkItemSubTitle'>Online K-12 School</div>
                    <div className='WorkItemRoll'>Software Engineering Intern</div>
                </WorkItem>
                <WorkItem id="pearl">
                    <img src={pearl_logo} alt="pearl"/>
                    <div className='WorkItemTitle'>Pearl</div>
                    <div className='WorkItemSubTitle'>Saas AI Job Recruiting</div>
                    <div className='WorkItemRoll'>Full-Stack Software Intern</div>
                </WorkItem>
                <WorkItem id="vibe_mill">
                    <img src={vibe_mill_logo} alt="vibe_mill"/>
                    <div className='WorkItemTitle'>Vibe Mill</div>
                    <div className='WorkItemSubTitle'>Spotify Playlist Generator</div>
                    <div className='WorkItemRoll'>Built It On The Side</div>
                </WorkItem>
            </div>
        </div>
    )
}