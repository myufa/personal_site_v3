import React, { Component, FC, useEffect, useState } from "react";

import './Nav.scss'

export const Nav: FC<{page: number}> = ({page}) => {
    return (
        <div className='Nav'>
            <tspan
                onClick={()=>window.open('/', '_self')}
                id={page === 0 ? 'selected' : undefined}
            >Work</tspan> &nbsp;/&nbsp; 
            <tspan
                onClick={()=>window.open('/about/', '_self')}
                id={page === 1 ? 'selected' : undefined}
            > About </tspan> &nbsp;/&nbsp;
            <tspan
                onClick={()=>window.open('/other/', '_self')}
                id={page === 2 ? 'selected' : undefined}
            > Other</tspan>
        </div>
    )
}