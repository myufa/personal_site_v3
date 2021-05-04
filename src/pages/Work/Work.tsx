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
                    <div className='WorkItemDetail'>Built entire code stack</div>
                    <div className='WorkItemDetail'>Conducted 50+ user iterviews</div>
                    <div className='WorkItemDetail'>Deployed on mobile with Heroku and Google App Engine</div>
                </WorkItem>
                <WorkItem id="dexter">
                    <img src={dexter_logo} alt="dexter"/>
                    <div className='WorkItemTitle'>Dexter Learning</div>
                    <div className='WorkItemSubTitle'>Online K-12 School</div>
                    <div className='WorkItemRoll'>Software Engineering Intern</div>
                    <div className='WorkItemDetail'>Launched a data science service with FastAPI, Scikit, and Docker, generating insights on students’ academic performance</div>
                    <div className='WorkItemDetail'>Fully piloted our CI/CD pipeline with CircleCI, drastically increasing deployment rates and reducing failed builds</div>
                    <div className='WorkItemDetail'>Built role-based authentication infrastructure with custom middleware for verifying token authenticity and permissions</div>
                    <div className='WorkItemDetail'>Led the team in formalizing the documentation and task creation process, implementing a kanban ticketing system</div>
                </WorkItem>
                <WorkItem id="pearl">
                    <img src={pearl_logo} alt="pearl"/>
                    <div className='WorkItemTitle'>Pearl</div>
                    <div className='WorkItemSubTitle'>Saas AI Job Recruiting</div>
                    <div className='WorkItemRoll'>Full-Stack Software Intern</div>
                    <div className='WorkItemDetail'>Designed a server-side paginated API for Twilio message aggregation with ElasticSearch, reducing load times by 90%</div>
                    <div className='WorkItemDetail'>Implemented Jest unit testing for backend Node services which lead to far less faulty deployments and faster iterations</div>
                    <div className='WorkItemDetail'>Deployed AI chatbot for our automated messaging service, removing the need for our clients to answer yes/no questions</div>
                </WorkItem>
                <WorkItem id="vibe_mill">
                    <img src={vibe_mill_logo} alt="vibe_mill"/>
                    <div className='WorkItemTitle'>Vibe Mill</div>
                    <div className='WorkItemSubTitle'>Spotify Playlist Generator</div>
                    <div className='WorkItemRoll'>Built It On The Side</div>
                    <div className='WorkItemDetail'>Integrated Spotify Web API with user sign-in from scratch</div>
                    <div className='WorkItemDetail'>Generated playlists with various algorithms for finding new songs within the users's preference</div>
                    <div className='WorkItemDetail'>Reorganized playlists based on metrics provided by spotify (energy, danceability, valence)</div>
                </WorkItem>
            </div>
        </div>
    )
}