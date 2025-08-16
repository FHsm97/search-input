import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyInput from './component/Myinput'
import SaveProgress from './component/SaveProgress'
import StatusUserOnline from './component/StatusUserOnline'

function App() {


  

  const searchRef = useRef(null)



  const handleFocus = () => {

    // console.log(searchRef);
    searchRef.current.focus();

  }

  


  return (
    <>
      <div className='bg-gray-100'>

        <div className='flex items-center justify-center h-screen'>
          <div className='space-y-2'>

            <MyInput myref={searchRef} />


            <nav>
              <button className='border border-gray-300 px-4 py-1 rounded' onClick={handleFocus}>Search</button>
            </nav>

            <SaveProgress/>
            <StatusUserOnline/>

          </div>
        </div>

      </div>

    </>
  )
}

export default App
