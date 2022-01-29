import OverlayedTitle from "../OverlayedTitle/OverlayedTitle";
import newairDs from "../../img/newair-ds.svg";
import newairMob from "../../img/newair-mob.svg";
import pesdis from "../../img/pesdis-black.png";

const countDownDate = new Date( "Feb 01, 2022 20:00" ).getTime();
let x = setInterval( () => {

    let now = new Date().getTime();
    let cdId = document.getElementById( "aircount" );

    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let weeks = Math.floor( distance / ( 1000 * 60 * 60 * 24 * 7 ) );
    let days = Math.floor( ( distance % ( 1000 * 60 * 60 * 24 * 7 ) ) / ( 1000 * 60 * 60 * 24 ) );
    let hours = Math.floor( ( distance % ( 1000 * 60 * 60 * 24 ) ) / ( 1000 * 60 * 60 ) );
    let minutes = Math.floor( ( distance % ( 1000 * 60 * 60 ) ) / ( 1000 * 60 ) );

    if ( cdId ) {
        cdId.innerHTML = `
           <div class="timerItem">${ weeks } 
           WEEKS </div>
           <div class="timerItem">${ days } 
           DAYS </div>
           <div class="timerItem"> ${ hours } 
           HOURS </div>
           <div class="timerItem"> ${ minutes } 
           MIN </div>
          `;
    } else {
        console.log( 'none' );
    }

    if ( distance < 0 ) {
        clearInterval( x );
        if ( cdId ) {
            cdId.innerHTML = "EXPIRED";
        } else {
            console.log( 'none' );
        }
    }
}, 1000 );


const FormContact = () => {
    return (
        <div>
            <OverlayedTitle>MINTING STARTS IN</OverlayedTitle>
            <div className="container countAir" id="aircount"></div>
            <div className="contact-us" id="formContact">

                <div className="container">
                    <div className="coins-features__title-wrapper contact-us__title" lang="en">
                    GET WHITELISTED
                        <div className="coins-features__title" lang="en">GET WHITELISTED</div>
                    </div>
                    <form className="contact-us__form" action="https://login.sendpulse.com/forms/simple/u/eyJ1c2VyX2lkIjo3ODI0ODk1LCJhZGRyZXNzX2Jvb2tfaWQiOjY2Mjg1OSwibGFuZyI6ImVuIn0=" method="post">

                        <div className="contact-us__field-wrap">
                            <input name="name" type="text" className="contact-us__field" placeholder="Name"></input>
                            <div className="input-name"></div>
                        </div>

                        <div className="contact-us__field-wrap ">
                            <input name="email" type="text" className="contact-us__field" placeholder="E-mail"></input>
                            <input type="hidden" name="sender" value="3bb06aa0-ac16-4695-a3f7-f46b3f4f36e2"></input>
                            <div className="input-email"></div>
                        </div>
                        <div className="contact-us__field-wrap">
                            <input name="ETH-wallet" type="text" className="contact-us__field" placeholder="ETH-wallet (optional)"></input>
                            <div className="input-name"></div>
                        </div>
                        <button className="gradient-button contact-us__button" type="submit">
                            <div className="gradient-button__text">JOIN</div>
                        </button>
                    </form>
                    <div className="or-word"></div>
                    <div className="join-discord-img-block">
                        <div className="jdib-top" style={{ "paddingBottom": "20px" }}>JOIN OUR DISCORD</div>
                        <div className="jdib-center">
                            <a href="https://discord.gg/KUyUh3PuGx" target="_blank" rel="noreferrer" style={{ "display": "contents" }}>
                                <object data={pesdis} type="" aria-label="svg" style={{ "width": "70%" }}></object>
                            </a>
                        </div>
                        <div className="jdib-bottom" style={{ "paddingTop": "20px" }}>AND get on the waitlist</div>
                    </div>

                </div>

            </div>
            <div className="newair">
                <OverlayedTitle>WHY YOU SHOULD BE THE FIRST?</OverlayedTitle>
                <object className="newair-ds" type="image/svg+xml" data={newairDs}>
                </object>
                <object className="newair-mob" type="image/svg+xml" data={newairMob}>
                </object>
            </div>
            <div>
            </div>
        </div>
    )
}
export default FormContact;