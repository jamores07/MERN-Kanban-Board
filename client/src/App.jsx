import { useState } from 'react'
import './App.css'
import { makeServer } from './server/server'

/* MirageJS */
if (process.env.NODE_ENV === 'development') {
   makeServer({ environment: 'development' });
  }



function App() {

  return (
    <>
    <div>

    </div>
    </>
  )
}

export default App
