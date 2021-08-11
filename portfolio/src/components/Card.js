import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 16,
  },
  pos: {
    marginBottom: 12,
  },
  heading: {
    textDecoration : 'none'
  }
});

export default function OutlinedCard() {
  const classes = useStyles();
  //const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Github
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          <a href="https://github.com/vinay061" target="_blank" rel="noreferrer" className={classes.heading}>
          link : https://github.com/vinay061</a>
        </Typography>
      </CardContent>
    </Card>
  );
}
