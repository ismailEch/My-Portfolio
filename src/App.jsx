import React from "react"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import Skills from "./components/Skills/Skills"
import WorkEx from "./components/WorkEx/WorkEx"
import Contact from "./components/Contact/Contact"
function App() {

  return (
    <>
      <Navbar /> 
      <div className="container">
        <Hero />
        <Skills />
        <WorkEx />
        <Contact />
      </div>
    </>
  )
}

export default App
