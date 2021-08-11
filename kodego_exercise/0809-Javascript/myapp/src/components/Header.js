import React from 'react';

const Header = () => {
    const styles = {
        color: "green",
        backgroundColor: "grey"
    }
    const styles2 = {
        color: "white",
        backgroundColor: "white"
    }

    let d = new Date();
        let n = d.getHours();
        let m = d.toLocaleTimeString();
        var greeting;   
            
        if (n > 4 && n < 12) {
          greeting = "Good Morning!";
          {styles2.color = "yellow"} 
          {styles2.backgroundColor = "black"}
        } else if (n >= 12 && n < 18) {
          greeting = "Good Afternoon!";
          {styles2.color = "orange"} 
          {styles2.backgroundColor = "green"}
        } else  {
          greeting = "Good Evening!";
          {styles2.color = "blue"} 
          {styles2.backgroundColor = "pink"}
        } 
        
    
        
      
      
return (
    <div>
    <header>This is a sample header.</header>
    <h3 style={{color:"blue"}}>Home</h3>
    <h3 style={{backgroundColor:"red"}}>About Us</h3>
    <h3 style={styles}>Contact Us</h3>
    <p id="gumanaKa" style={styles2} >{greeting} {m}</p>
    </div>
    
)
}
export default Header