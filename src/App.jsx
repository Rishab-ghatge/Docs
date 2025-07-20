import React from 'react'
import Background from './components/Background'
import Foreground from './components/Foreground'
import Form from './components/Form'

const App = () => {
  return (
    <>
     <div className='relative w-full h-screen bg-zinc-800'>
      <Background/>
      <Foreground/>
      {/* <Form/> */}
     </div>
    </>
  )
}

export default App