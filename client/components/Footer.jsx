import React from 'react'
import { Container, Typography } from '@material-ui/core'

import { FooterStyles } from '../styles/muiStyles'

const Footer = () => {
  const classes = FooterStyles()

  return (
    <Container maxWidth="xl" className={classes.footer}>
      <Typography className={classes.text} variant="body1" component="h5">Created by Joanna Klimas</Typography> 
      <a href="https://github.com/joanna-klimas/color-palette-app"><img className={classes.icons} src="/images/github-logo.svg" /></a>
    </Container>
  )
}

export default Footer
