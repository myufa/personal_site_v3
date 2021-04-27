import React, { Component, FC, useEffect, useState } from "react";
import { WorkItem } from "./components/WorkItem";

import blind_date_demo from '../../../public/blind_date_demo.png'
import './Work.scss'

export const Work: FC<{setPage: (v: any) => void}> = ({setPage}) => {
    useEffect(() => {
        setPage(0)
    }, [])
    return (
        <div className='Work'> 
            <div className='subHeader'>
            Hi! I build cool things with code! 
            Check out some of my work below 
            </div>
            <div className='title'>WORK</div>
            <WorkItem>
                <img src={blind_date_demo} alt="blind date"/>
                <div className='WorkItemTitle'>Blind Date</div>
                <div className='WorkItemSubTitle'>Mobile Dating App</div>
            </WorkItem>
        </div>
    )
}