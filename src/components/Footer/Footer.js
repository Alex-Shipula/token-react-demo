//libraries
import { NavLink } from 'react-router-dom'

const Footer = (props) => {

    const aaditionalClassName = props.parentPage ? `${props.parentPage}-` : '';

    return(
        <div className={`container-fluid ${aaditionalClassName}footer`}>
            <div className="container cont-footer">
                <div className="cRight">
                Copyright © 2021 My Puppy Company LTD            
                </div>
                <nav className="footerMenu">
                    <NavLink  to="/faq" aria-disabled="true">FAQ</NavLink>
                    <NavLink to="/about" aria-disabled="true">About Us</NavLink>
                    <NavLink to="/terms" aria-disabled="true">Terms & Conditions</NavLink> 
                    <NavLink to="/privacy" aria-disabled="true">Privacy Policy</NavLink>
                    
                </nav>
            </div>
        </div>
    )
}

export default Footer