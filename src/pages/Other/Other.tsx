import React, { Component, FC, useEffect, useState } from "react";

import './Other.scss'

export const Other: FC<{setPage: (v: any) => void}> = ({setPage}) => {
    useEffect(() => {
        setPage(2)
    }, [])
    return (
        <div className='Other'>
            <div className='title'>Other</div>
            <p className='OtherText'>
                I’m an amateur producer / beat maker! Follow me on soundcloud
            </p>
        </div>
    )
}