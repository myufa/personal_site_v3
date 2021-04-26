import React, { FC, useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import './Main.scss'


export const Main: FC<{authenticated: boolean}> = (props) => {
    return (
        <Redirect exact push to='/login/' />
    )
}