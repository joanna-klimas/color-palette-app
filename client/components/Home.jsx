import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import MonochromePalette from './MonochromePalette'
import ComplementPalette from './ComplementPalette'
import TriadPalette from './TriadPalette'
import { setBaseColor } from '../actions/baseColor'
import { setPending } from '../actions/pageInfo'

const Home = ( {dispatch, baseColor, pending} ) => {

  function randomHexColor() {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }

  const [bgColor, setBackgroundColor] = useState(baseColor)
  const [color, setColor] = useState('')

  useEffect(() => {
    dispatch(setPending(false))
  }, [dispatch, pending])

  function changeRandomColor() {
    setBackgroundColor(randomHexColor())
    dispatch(setBaseColor(bgColor))
  }

  function changeColor() {
    setBackgroundColor(color)
    dispatch(setBaseColor(bgColor))
  }

  return (
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
              placeholder={baseColor}
              name="userColor"
              onChange={(e) => {
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
      
      <ul>
        <li><a>monochrome</a></li>
        <li><a>complement</a></li>
        <li><a>triad</a></li>
      </ul>

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
  )
}

const mapStateToProps = (state) => {
  return {
    baseColor: state.baseColor,
    pending: state.pageInfo.pending
  }
}

export default connect(mapStateToProps)(Home)
