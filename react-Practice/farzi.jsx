import React, {useState} from 'react'
import logo from './logo.svg'
import './farzi.css'



const farzi = () => {
  return (
    <div className='App'>
        <header className='App-header'>
        <img src={logo} className="App-logo" alt="logo" />

        <p>
            Edit <code>src/App.js</code> and save to reload
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>


        </header>


        const [data, setdata] = useState({
            name: 'kaifyy',
            age: 21
        });

        return <h1>My name is {data.name} and my age is {data.age}</h1>
    </div>
  )
}

export default farzi
