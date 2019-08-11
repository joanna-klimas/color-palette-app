import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Container, Grid, TextField, Button, AppBar, Tabs, Tab, Box } from '@material-ui/core'

import MonochromePalette from './MonochromePalette'
import ComplementPalette from './ComplementPalette'
import TriadPalette from './TriadPalette'
import { setBaseColor } from '../actions/baseColor'
import { setPending } from '../actions/pageInfo'
import { HomeStyles } from '../styles/muiStyles'

const Home = ( {dispatch, baseColor, pending} ) => {
  const classes = HomeStyles()

  function randomHexColor() {
    return `#${Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, 0)}`
  }

  const [bgColor, setBackgroundColor] = useState(baseColor)
  const [color, setColor] = useState('')
  const [paletteType, setPaletteType] = useState('monochrome')

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

  const sliderValue = () =>{
    if (paletteType === 'monochrome') return 0
    else if (paletteType === 'complement') return 1
    else if(paletteType === 'triad') return 2
  }

  const tabPanel = (paletteType) => {
    if (paletteType === 'monochrome') {
      return (
        <div className={classes.paletteSquare} style={{ height: 350, width: 350, backgroundColor: bgColor }}>
          <MonochromePalette chosenColor={bgColor} />
        </div>
      )
    } else if (paletteType === 'complement') {
      return (
        <div className={classes.paletteSquare} style={{ height: 350, width: 350, backgroundColor: bgColor }}>
          <ComplementPalette chosenColor={bgColor} />
        </div>
      )
    } else if (paletteType === 'triad') {
      return (
        <div className={classes.paletteSquare} style={{ height: 350, width: 350, backgroundColor: bgColor }}>
          <TriadPalette chosenColor={bgColor} />
        </div>
      )
    }
  }

  return (
    <Container className={classes.container}>
      <Grid container  className={classes.grid} spacing={1}>
        <Grid item xs={2}>
          <form className={classes.input}>
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

      <AppBar position="static" className={classes.tabBar}>
        <Tabs value={sliderValue()}>
          <Tab label="monochrome" onClick={() => setPaletteType('monochrome')} />
          <Tab label="complement" onClick={() => setPaletteType('complement')}/>
          <Tab label="triad" onClick={() => setPaletteType('triad')}/>
        </Tabs>
      </AppBar>
      <Box className={classes.paletteSquareBox}>
        {tabPanel(paletteType)}
      </Box>  
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
