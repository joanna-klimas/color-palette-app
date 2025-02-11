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
    marginBottom: '30px'
  }
}))

export const NavbarStyles = makeStyles(theme => ({
  navbar: {
    marginBottom: '30px',
    backgroundColor: '#fdef82'
  },
  button: {
    marginLeft: '1300px',
    position: 'absolute'
  },
  icon: {
    height: '80px',
    margin: '10px'
  }
}))

export const FooterStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: '#fdef82',
    height: '115px'
  },
  icons: {
    display: 'block',
    margin: 'auto'
  },
  text: {
    textAlign: 'center',
    marginBottom: '15px',
    paddingTop: '20px'
  }
}))
