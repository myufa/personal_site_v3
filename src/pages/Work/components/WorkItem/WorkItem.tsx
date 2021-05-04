import React, { Component, FC, useEffect, useRef, useState } from "react";
import './WorkItem.scss'

import arrowUp from '../../../../../public/arrow_up.svg'
import arrowDown from '../../../../../public/arrow_down.svg'

export const WorkItem: FC<{
    id?: string, 
    children: JSX.Element[]
}> = (props) => {
    const [open, setOpen] = useState(false)
    const [detailsOpen, setDetailsOpen] = useState(false)
    const myref = useRef<HTMLDivElement>(null);

    const filterPresenter = (child: JSX.Element) => child.props.className !== 'WorkItemDetail'
    const filterDetail = (child: JSX.Element) => child.props.className === 'WorkItemDetail'

    if(myref.current) {
        myref.current.scrollTop -= 50
        //myref.current.setAttribute("scrolltop", myref.current.scrollTop - 100)
    }
    
    const onMoreClick = (ref: React.MutableRefObject<any>) => () => {
        if (!open) {
            const pageDiff = 160 // window.innerWidth < 600 ? 100 : 160
            console.log("scroll", window.pageYOffset, myref.current?.offsetTop, pageDiff)
            if (myref.current && 
                Math.abs(window.pageYOffset - myref.current.offsetTop) > pageDiff
            ) {
                window.scrollTo({
                    top: myref.current.offsetTop - 35,
                    behavior: "smooth",
                });
            }            
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
                {props.children.filter(filterPresenter)}
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
                {props.children.filter(filterDetail)}
            </div>
        </div>
    )
}