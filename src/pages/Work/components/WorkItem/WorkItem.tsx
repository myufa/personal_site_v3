import React, { Component, FC, useEffect, useState } from "react";
import './WorkItem.scss'

import arrowUp from '../../../../../public/arrow_up.svg'
import arrowDown from '../../../../../public/arrow_down.svg'

export const WorkItem: FC<{id?: string}> = (props) => {
    const [open, setOpen] = useState(false)
    return (
        <div 
            className={open ? 
                'WorkItem open':
                'WorkItem'
            } 
            id={props.id}
        >
            <div className='WorkItemContents'>
                {props.children}
            </div>
            <div 
                className='more'
                onClick={()=>setOpen(!open)}
            >
                <img 
                    id='arrow'
                    src={open ? arrowUp : arrowDown} 
                    alt="arrow"/>
            </div>
        </div>
    )
}