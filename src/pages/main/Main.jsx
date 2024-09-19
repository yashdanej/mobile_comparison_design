import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Mobile from '../../components/mobile/Mobile'

const Main = () => {
  return (
    <div className='w-[100vw] min-h-[100vh] bg-gray-100'>
      <Navbar/>
      <Mobile/>
    </div>
  )
}

export default Main
