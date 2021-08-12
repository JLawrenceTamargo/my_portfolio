import React from 'react';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: "left"
  },
}));

const Header = () => {
    // const styles = {
    //     color: "green",
    //     backgroundColor: "grey"
    // }
    // const styles2 = {
    //     color: "white",
    //     backgroundColor: "grey"
    // }

     
    let d = new Date();
    let n = d.getHours();
    let m = d.toLocaleTimeString();
    var greeting;   
    
      if (n > 4 && n < 12) {
        greeting = "Good Morning!";
        // {styles2.color = "yellow"}; 
        // {styles2.backgroundColor = "black"};
      } else if (n >= 12 && n < 18) {
        greeting = "Good Afternoon!";
        // {styles2.color = "orange"}; 
        // {styles2.backgroundColor = "green"};
      } else  {
        greeting = "Good Evening!";
        // {styles2.color = "blue"}; 
        // {styles2.backgroundColor = "pink"};
      }

    
            
    
        
         
const classes = useStyles();
      
return (
    // <div className="fixed-top d-flex">
    // 
    // <h3 style={{color:"blue"}}>Home</h3>
    // <h3 style={{backgroundColor:"red"}}>About Us</h3>
    // <h3 style={styles}>Contact Us</h3>
    // <p id="gumanaKa" style={styles2} >{greeting} {m}</p>
    // </div>
    <header className="fixed-top">
    <div className={classes.root}>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
        Jhon's Mess of a Coding Journal
        </Typography>
        <Button color="inherit" ><AccessibleForwardIcon fontSize="medium"/>{greeting} The time is {m}</Button>
      </Toolbar>
    </AppBar>
  </div>
  </header>
    
)
}
export default Header