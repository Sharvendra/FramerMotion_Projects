import React, { useState } from 'react'
import { motion } from 'framer-motion'


const App = () => {

  const [val, setVal] = useState(false)

  return (
    <div className='p-32 w-full h-full flex items-center justify-center'>
      <div data-val={val} onClick={() => setVal(!val)} className=' handle bg-green-500 w-52 h-16 rounded-full flex items-center  '>
        <motion.div layout className='w-10 h-10 bg-green-700 rounded-full'></motion.div>
      </div>
    </div>
  )
}

export default App