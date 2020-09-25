import React, { useContext } from 'react'
import BookContext from '../../utils/BookContext'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}))

const Form = () => {
  const classes = useStyles();

  const {
    search,
    handleInputChange,
    handleSearchApibook
  } = useContext(BookContext)

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
        id="outlined-basic" 
        label="Book Name" 
        variant="outlined" 
        name="search" 
        value={search}
        onChange={handleInputChange}  />

      <Button 
        variant="contained" 
        color="primary"
        onClick={handleSearchApibook}
      >Search</Button>
    </form>
  );
}

export default Form