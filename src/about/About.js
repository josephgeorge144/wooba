import React, { useState } from 'react';
import './about.css'

export function Name() {  
  const mystyle = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
  };
  return (
    <>
    <h1 style={mystyle} >joseph</h1>
    </>
    
  )
}

export function About() {
  
  return (
    <>
    <Name />
    
    </>
    )
    
  
  }

  