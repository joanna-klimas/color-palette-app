import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core'

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

  const changeRandomColor = () => {
    setBackgroundColor(randomHexColor())
    dispatch(setBaseColor(bgColor))
  }

  const changeColor = () => {
    setBackgroundColor(color)
    dispatch(setBaseColor(bgColor))
  }

  return (
    <Container>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <img style={{ height: 80 }} src='/unicorn-01_300x.png'></img>
          <Typography variant="h3" component="h2" gutterBottom>the unicorn</Typography>
        </Grid>
        <Grid item xs={2}>
          <form>
            <TextField
              id="user input"
              label="pick a colour"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              variant="outlined"
              placeholder={'#ffffff'}
            >
            </TextField>
          </form>
        </Grid>
        <Grid item xs={1}>
          <Button
            variant="contained"
            color="primary"
            onClick={changeColor}
          >update</Button>
        </Grid>
        <Grid item xs={2}>
        <Button
            variant="contained"
            color="primary"
            onClick={changeRandomColor}
          >feeling lucky?</Button>
        </Grid>
        <Grid item xs={7}></Grid>
      </Grid>

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
    </Container>
  )
}

const mapStateToProps = (state) => {
  return {
    baseColor: state.baseColor,
    pending: state.pageInfo.pending
  }
}

export default connect(mapStateToProps)(Home)
