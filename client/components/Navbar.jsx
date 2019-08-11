import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'

import { NavbarStyles } from '../styles/muiStyles'

const Navbar = () => {
  const classes = NavbarStyles()

  return (
    <AppBar className={classes.navbar} position="static">
      <Toolbar>
        <img className={classes.icon} src='/unicorn-01_300x.png'></img>
        <Typography variant="h3" component="h2" gutterBottom>the unicorn</Typography>
        <Button className={classes.button} color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
