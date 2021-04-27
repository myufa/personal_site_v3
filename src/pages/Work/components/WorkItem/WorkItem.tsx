import React, { Component, FC, useEffect, useState } from "react";
import './WorkItem.scss'

export const WorkItem: FC<{id?: string}> = (props) => {
    return (
        <div className='WorkItem' id={props.id}>
            <div className='WorkItemContents'>
                {props.children}
            </div>
        </div>
    )
}