import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CssBaseline from '@material-ui/core/CssBaseline'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import SvgIcon from '@material-ui/core/SvgIcon'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Container from '@material-ui/core/Container'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& > svg': {
      margin: theme.spacing(2)
    },
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: 'white',
    textDecoration: 'none'
  }
}))

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Navbar = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Google Books
          </Typography>
          <Link to='/' className={classes.link}><Button color="inherit">Home <HomeIcon /></Button></Link>
          <Link to='/saved' className={classes.link}><Button color="inherit">Save <AddShoppingCartIcon /></Button></Link>
        </Toolbar>
      </AppBar>
      <React.Fragment>
        <CssBaseline />
        <Container fixed>
            <h1 component='div' style={{textAlign: 'center'}}>(React) Google Books Search</h1>
            <h3 component='div' style={{ textAlign: 'center' }}>Search for and Save Books of Interest</h3>
        </Container>
      </React.Fragment>
    </div>
  )
}


export default Navbar