import maillogo from '../images/icon-mail.png';
import inlogo from '../images/in-icon.png';

function Info() {
    return (
        <div className='info'>
            <div className='prof-pic'></div>
            <h1>Jorge Castilla</h1>
            <h2>Frontend Developer</h2>
            <a className='web-link' href="https://github.com/joty00" target= "_blank">jorgecastilla.website</a>
            <div className='info-links'>
                <a className='mail-link' href="mailto:jorgitocastilla27@gmail.com" target= "_blank">
                    <img src={maillogo} alt="" />
                    Email
                </a>
                <a className='in-link' href="https://www.linkedin.com/in/jorge-castilla-117547246/" target= "_blank">
                    <img src={inlogo} alt="" />
                    LinkedIn
                </a>
            </div>
        </div>
    )
}

export default Info;