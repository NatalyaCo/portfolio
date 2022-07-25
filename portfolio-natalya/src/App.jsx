import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Mystory from './components/mystory/Mystory'
import Skills from './components/skills/Skills'
import Contact from './components/contact/Contact'



export const App = () => {
  return (
    <>
    
    <Header />

    <Nav />
  
    <Mystory />

    <Portfolio />

    <Skills />

    <Contact /> 
    
    </>
  )
}

export default App