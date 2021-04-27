import React, { Component, FC, useEffect, useState } from "react";

import './About.scss'

export const About: FC<{setPage: (v: any) => void}> = ({setPage}) => {
    useEffect(() => {
        setPage(1)
    }, [])
    return (
        <div className='About'>
            <div className='title'>About Me</div>
            <p className='AboutText'>
                I am a software engineer and recent grad from The University of Michigan(Go Blue!). 
                I love building fun side projects that my friends can make use of. <br /><br />

                Startups are my thing. 
                I’ve worked as an engineer with a small founding team @ Pearl and Dexter, 
                have helped procure funding for startups @ UpRound Venture Capital, 
                and have started my own @ Blind Date. <br /><br />

                I also make music (:
            </p>
        </div>
    )
}