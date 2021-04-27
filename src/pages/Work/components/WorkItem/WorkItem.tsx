import React, { Component, FC, useEffect, useState } from "react";
import './WorkItem.scss'

export const WorkItem: FC = (props) => {
    return (
        <div className='WorkItem'>
            <div className='WorkItemContents'>
                {props.children}
            </div>
        </div>
    )
}