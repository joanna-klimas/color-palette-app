import React from 'react'
import { Container } from '@material-ui/core'

import { FooterStyles } from '../styles/muiStyles'

const Footer = () => {
  const classes = FooterStyles()

  return (
    <Container maxWidth="xl" className={classes.footer}>
    </Container>
  )
}

export default Footer