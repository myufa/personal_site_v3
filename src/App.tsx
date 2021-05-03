import React, { Component, FC, useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Redirect, Route } from "react-router-dom";
import './App.scss'
import { Nav } from "./components/Nav";
import { About, Other, Work } from "./pages";

import me from '../public/me.jpg'
import { Socials } from "./components/Socials";

const App: FC = () => {
  const [page, setPage] = useState(0)

  useEffect(()=>{}, [page])

  return (    
    <div className='App'>
      <Router >
        <div className="name">MICHAEL YUFA</div>
        <Nav page={page}/>
        
        <div className='pageContainer'>
          <div className='pageBody'>
              <div className='picAndSocials'>
                <img 
                  className='me'
                  src={me} 
                  alt="Michael Yufa"
                />
                <Socials />
              </div>
              
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
          </div>
        </div>
      </Router>
    </div>    
  )
}

export default App;