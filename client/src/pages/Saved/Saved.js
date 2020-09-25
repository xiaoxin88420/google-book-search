import React, { useState, useEffect } from 'react'
import API from '../../utils/API'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
})

const Saved = () => {
  const classes = useStyles()

  const [savedState, setSavedState] = useState({
    saved: []
  })

  savedState.handleDeleteSaved = id => {
    API.deleteBook(id)
      .then(() => {
        let saved = savedState.saved.filter(book => book._id !== id)
        setSavedState({ ...savedState, saved })
      })
  }

  useEffect(() => {
    API.getSavedBook()
      .then(({ data }) => {
        setSavedState({ ...savedState, saved: data })
      })
  }, [])

  return (
    <>
      {
        savedState.saved.length > 0 ? (
          savedState.saved.map(book => (
            <Card className={classes.root} key={book.bookid}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  alt={book.title}
                  height="140"
                  image={book.image}
                  title={book.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {book.authors}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {book.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" href={book.link}>
                  Link
                </Button>
                <Button size="small" color="primary" onClick={() => savedState.handleDeleteSaved(book._id)}>
                  Delete
                </Button>
              </CardActions>
            </Card>
          ))
        ) : null
      }
    </>
  )
}

export default Saved