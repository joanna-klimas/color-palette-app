import React, { useState } from 'react'

import MonochromePalette from './MonochromePalette'
import ComplementPalette from './ComplementPalette'
import TriadPalette from './TriadPalette'

const Home = () => {

  function randomHexColor() {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  } 

  const [bgColor, setBackgroundColor] = useState('pink')
  const [color, setColor] = useState('')

  console.log(bgColor)
  
  function changeRandomColor () {
    setBackgroundColor(randomHexColor())
  }

  function changeColor () {
    setBackgroundColor(color)
  }  

  return (
    <React.Fragment>
      <div className="box">
        <div style={{ display: 'inline-flex' }}>
          <img style={{ height: 80 }} src='/unicorn-01_300x.png'></img>
          <h1 className="title is-1">the unicorn</h1>
        </div>
        <div className="columns">
          <div className="column is-one-fifth">
            <h2 className="title is-3">pick a colour:</h2>
          </div>
          <div className="column is-one-fifth">
            <form>
              <input
                className="input"
                type="text"
                placeholder={'example string'}
                name="userColor"
                onChange={(e) => {
              //    e.preventDefault()
                  setColor(e.target.value)
                }}>
              </input>
            </form>
          </div>
          <div className="column is-one-fifth">
          <button style={{ marginBottom: '2em' }} onClick={changeColor} className="button is-light is-medium is-warning">update</button>
          </div>
        </div>

        <button style={{ marginBottom: '2em' }} onClick={changeRandomColor} className="button is-light is-medium is-warning">feeling lucky?</button>

        <div className="tabs is-medium">
          <ul>
            <li className="is-active"><a>monochrome</a></li>
            <li><a>complement</a></li>
            <li><a>triad</a></li>
          </ul>
        </div>

        <div className="columns">
          <div className="column">
            <div className="details-visible" style={{ height: 350, width: 350, backgroundColor: bgColor }}>
              <MonochromePalette chosenColor={bgColor} />
            </div>
          </div>
          <div className="column">
            <div className="details-visible" style={{ height: 350, width: 350, backgroundColor: bgColor }}>
            <ComplementPalette chosenColor={bgColor} />
          </div>
          </div>

          <div className="column">
            <div className="details-visible" style={{ height: 350, width: 350, backgroundColor: bgColor }}>
              <TriadPalette chosenColor={bgColor} />
            </div>
          </div>
        </div>

      </div>
    </React.Fragment>
  )
}

export default Home
