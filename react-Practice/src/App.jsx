import React, { useState } from 'react'

const App = () => {

  const [username, setusername] = useState('gym- body builder')

  return (
    <div>

      <form>
        <input value="kaify"
        type="text px-4 py-3" placeholder="Enter your name" />
        <button type="submit" className='px-4 py-3 font-semibold'>Sub mit Here</button>
      </form>
    </div> 
  )
}

export default App