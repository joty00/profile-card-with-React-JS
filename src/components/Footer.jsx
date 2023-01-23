import twitterlogo from '../images/twitter-icon.png';
import facebooklogo from '../images/facebook-icon.png';
import instagramlogo from '../images/instagram-icon.png';
import githublogo from '../images/github-icon.png';


function Footer() {
    return (
        <div className="footer">
            <div className='footer-links'>
                <a href="https://twitter.com/joty00?t=wY57bbF0RFyeTO0G-mq12g&s=09" target= "_blank">
                    <img src={twitterlogo} alt="twitter logo" />
                </a>
                <a href="https://www.facebook.com/jorgito.castilla.1?mibextid=ZbWKwL" target= "_blank">
                    <img src={facebooklogo} alt="twitter logo" />
                </a>
                <a href="https://www.instagram.com/joty00_official/" target= "_blank">
                    <img src={instagramlogo} alt="twitter logo" />
                </a>
                <a href="https://github.com/joty00" target= "_blank">
                    <img src={githublogo} alt="twitter logo" />
                </a>
            </div>
        </div>
    )
}

export default Footer;