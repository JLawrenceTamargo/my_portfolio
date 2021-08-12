import React from 'react';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const Footer = () => {
return (
    // <footer>This is a sample footer.</footer>
    <footer className="w-100 fixed bottom ">
    <h5>"Pag gumana na, wag na galawin." <br/> -a software developer</h5>
    <div >
        <button><FacebookIcon /></button>
        <button><TwitterIcon /></button>
        <button><LinkedInIcon /></button>
    </div>
    </footer>
)
}
export default Footer