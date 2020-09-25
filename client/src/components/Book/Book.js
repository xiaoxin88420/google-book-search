import React, {useEffect} from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Icon from '@material-ui/core/Icon'

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    '& > span': {
      margin: theme.spacing(2),
    }
  }
}))

const Book = props => {
    const classes = useStyles()

    return (
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.book.image}
            title={props.book.title} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {props.book.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.book.authors}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.book.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary" href={props.book.link}>
            Link
          </Button>
          <Button size="small" color="primary"
            onClick={() => props.handleSaveBook(props.book.bookid)}>
            Save<Icon color="primary">add_circle</Icon>
          </Button>
        </CardActions>
      </Card>
    )
  }

export default Book