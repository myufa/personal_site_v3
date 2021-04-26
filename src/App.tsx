import React, { Component, FC, useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Redirect, Route } from "react-router-dom";
import './App.scss'
import { Main } from "./pages";

const App: FC = () => {
  const [isAuthed, setIsAuthed] = useState(false)
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)

  return (
    <div className='App'>
      hi
    </div>
  )
}

export default App;