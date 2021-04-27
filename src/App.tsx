import React, { Component, FC, useEffect, useState } from "react";
import { Router, Link, Redirect, Route } from "react-router-dom";
import './App.scss'
import { Nav } from "./components/Nav";
import { About, Other, Work } from "./pages";
import { history } from "./utils/histroy";

import me from '../public/me.jpg'

const App: FC = () => {
  const [page, setPage] = useState(0)

  useEffect(()=>{}, [page])

  return (
    <div className='App'>
      <div className="name">MICHAEL YUFA</div>
      <Nav page={page}/>
      <img 
        className='me'
        src={me} 
        alt="Michael Yufa"
      />
      <div className='pageBody'>
        <Router history={history} >
          <Route 
            exact={true} 
            path='/'
            render={(props)=><Work setPage={setPage} 
          />}/>
          <Route 
            exact={true} 
            path='/about/'
            render={(props)=><About setPage={setPage} 
          />}/>
          <Route 
            exact={true} 
            path='/other/'
            render={(props)=><Other setPage={setPage} 
          />}/>
        </Router>
      </div>
    </div>
  )
}

export default App;