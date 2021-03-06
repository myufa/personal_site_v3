import React, { Component, FC, useEffect, useState } from "react";
import { Router, Link, Redirect, Route } from "react-router-dom";

import './Nav.scss'

export const Nav: FC<{page: number}> = ({page}) => {
    const resume_link = 'https://github.com/myufa/personal_site_v3/blob/main/public/Michael-Yufa-Resume.pdf'
    return (
        <div className='Nav'>
            <Link
                to='/'
                id={page === 0 ? 'selected' : undefined}
            >Work</Link> &nbsp;/&nbsp; 
            <Link
                to='/about/'
                id={page === 1 ? 'selected' : undefined}
            > About </Link> &nbsp;/&nbsp;
            <Link
                to='/other/'
                id={page === 2 ? 'selected' : undefined}
            > Other</Link>
        </div>
    )
}