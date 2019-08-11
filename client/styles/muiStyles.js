import { makeStyles } from '@material-ui/styles'
import { createMuiTheme } from '@material-ui/core/styles'

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#fdeb57'
    },
    secondary: {
      main: '#4a1d59'
    },
    background: {
      main: '#000000'
    }
  },
  spacing: 8,
  fontSize: 16
})

export const HomeStyles = makeStyles(theme => ({
  input: {
    margin: 10,
    label: {
      color: theme.palette.primary.main
    },
  },
  grid: {
    alignItems: 'center'
  },
  paletteSquare: {
    margin: 'auto',
    marginTop: theme.spacing(2)
  },
  paletteSquareBox: {
    width: '450px'
  },
  tabBar: {
    width: '450px'
  },
  container: {
    marginBottom: '50px'
  }
}))

export const NavbarStyles = makeStyles(theme => ({
  navbar: {
    marginBottom: '30px'
  },
  button: {
    marginLeft: '1300px',
    position: 'absolute'
  }
}))

export const FooterStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.primary.main,
    height: '170px'
  }
}))
