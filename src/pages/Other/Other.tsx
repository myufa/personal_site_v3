import React, { Component, FC, useEffect, useState } from "react";

import './Other.scss'

export const Other: FC<{setPage: (v: any) => void}> = ({setPage}) => {
    const soundcloud_url = 'https://soundcloud.com/yufa-made-it'
    useEffect(() => {
        setPage(2)
    }, [])
    return (
        <div className='Other'>
            <div className='title'>Other</div>
            <p className='OtherText'>
                I’m an amateur producer / beat maker! Follow me on&nbsp;
                    <a
                        href={soundcloud_url}
                        target='_blank'
                    >soundcloud</a> 
            </p>
        </div>
    )
}