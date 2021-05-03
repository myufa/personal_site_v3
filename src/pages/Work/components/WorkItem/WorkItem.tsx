import React, { Component, FC, useEffect, useRef, useState } from "react";
import './WorkItem.scss'

import arrowUp from '../../../../../public/arrow_up.svg'
import arrowDown from '../../../../../public/arrow_down.svg'

export const WorkItem: FC<{id?: string}> = (props) => {
    const [open, setOpen] = useState(false)
    const [detailsOpen, setDetailsOpen] = useState(false)
    const myref = useRef<HTMLDivElement>(null);
    const onMoreClick = (ref: React.MutableRefObject<any>) => () => {
        if (!open) {
            ref.current.scrollIntoView({
                behavior: "smooth",
            });
            setTimeout(() => {
                setDetailsOpen(true);
            }, 500);
            setOpen(true)
        } else {
            setOpen(false) 
            setDetailsOpen(false)
        }               
    }
    return (
        <div 
            ref={myref}
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
                onClick={onMoreClick(myref)}
            >
                <img 
                    id='arrow'
                    src={open ? arrowUp : arrowDown} 
                    alt="arrow"/>
            </div>
            <div 
                className={open ? 'WorkItemDetails open' :'WorkItemDetails'}
                hidden={!detailsOpen}
            >
                hello
            </div>
        </div>
    )
}