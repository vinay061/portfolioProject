import ButtonAppBar from './components/Appbar';
import Homepage from './components/Homepage';
import Resume from './components/Resume';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import NotFoundPage from './components/NotFoundPage';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core';
import Footer from './components/Footer';

const useStyles = makeStyles( (theme) => ({
  buttonr: {
    marginLeft: theme.spacing(70),
    marginTop : theme.spacing(5),
    marginBottom : theme.spacing(5) 
  },
  buttoncv: {
    marginLeft : theme.spacing(2),
    marginTop : theme.spacing(5),
    marginBottom : theme.spacing(5)
  },
  linkr : {
    color : 'white',
    textDecoration : 'none'
  },
  linkc : {
    color : 'white',
    textDecoration : 'none'
  }
}))


function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <ButtonAppBar/>
      
      <BrowserRouter>
      <Button variant="contained" color="secondary" className={classes.buttonr}>
        <Link to="/cv" className={classes.linkr}>RESUME</Link>
      </Button>
      <Button variant="contained" color="secondary" className={classes.buttoncv}>
      <Link to="/" className={classes.linkc}>Homepage</Link>
      </Button>
      
        <Switch>
          <Route path="/" exact component ={Homepage}/>
          <Route path="/cv" component={Resume}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
