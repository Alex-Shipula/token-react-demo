//components
import OverlayedTitle from "../OverlayedTitle/OverlayedTitle"
//images
import dogUp from "../../img/startpage_up_desktop_121121.svg";
import dogDown from "../../img/startpage_down_desktop_121121.svg";
import dogUpMob from "../../img/startpage_up_mobile_121121.svg";
import dogDownMob from "../../img/startpage_down_mobile_121121.svg";


const HowItWorks = () => {
    return <div className="container-fluid howIt">
        <OverlayedTitle>10000 GENESIS DOGS WAITING THEIR OWNER</OverlayedTitle>        
        <div className="glass">
            <div className="howIt__title">
            HOW DOES IT WORK
            </div>
            <object className="glassUp" type="image/svg+xml"  data={dogUp}>
            </object>
            <object className="glassUpMob" type="image/svg+xml"  data={dogUpMob}>
            </object>
            <div className="howIt__title">
            THEN WHAT CAN I DO?
            </div>         
            <object className="glassDown" type="image/svg+xml" data={dogDown} >
            </object>
            <object className="glassDownMob" type="image/svg+xml" data={dogDownMob} >
            </object>
        </div>
    </div>
}

export default HowItWorks