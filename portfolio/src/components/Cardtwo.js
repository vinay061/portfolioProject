import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    marginTop : 10,
    marginBottom : 10
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
  heading : {
    textDecoration : 'none'
  },
});

export default function Cardtwo() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          Projects
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {bull}<a href="https://join.buyzooka.io/" target="_blank" rel="noreferrer" className={classes.heading}>
              Buyzooka</a>
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {bull}<a href="https://todo-appr.netlify.app/" target="_blank" rel="noreferrer" className={classes.heading}>
              To Do App</a>
        </Typography>
      </CardContent>
    </Card>
  );
}
