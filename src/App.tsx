
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Routes from './components/Routes'
import { useState } from 'react'

function App() {

 const [darkTheme, setDarkTheme] = useState(false)
 
  return (
    <>
     <div className={darkTheme ? "dark": " "}>

      <div className='bg-gray-1oo dark:bg-grade-900'>


      <h1>
        
        hello world
        </h1>     </div>


              </div>
    </>
  )
}

export default App
