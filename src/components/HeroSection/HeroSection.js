//components
import Header from "../Header/Header"
//images
import maindog from "../../img/maindog.svg"
import sobaLeft from "../../img/btn-soba-left.png";
import sobaRight from "../../img/btn-soba-right.png";
import logo from "../../img/btn-cd-logo.png";

//styles
import './HeroSection.css'

 const HeroSection = () =>{

        return (
            <div className="container-fluid heroSection">
                <Header withStarImage={false} />
                <h1>GET YOUR OWN <span className="textOrange">DOG</span> AS AN NFT</h1>
                <div className="contentWrapper">
                    <div className="row cloudsHero">
                        <div className='col-md hero-buy'>
                            <div className={'card heroLeftBlock'}>
                                <div className="card-img-bg">
                                    <a href="/dog-page/2120">
                                        <img src="https://token.dog:8010/public/uploadImages/dog-2120-nft.svg" className="card-img-top" alt="..." />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="cBodyLeft">
                                        <a href="/dog-page/2120" style={{ "width": "200px", "textDecoration": "none", "display": "flex", "flexDirection": "row", "justifyContent": "space-between" }}>
                                            <h5 className="card-title">Savannah Speedo</h5>
                                            <div className="regPrice">*</div>
                                        </a>
                                        <p className="card-text">Labrador 100%</p>
                                        <div className="priceBottom">
                                        </div>
                                    </div>
                                    <div className="cBoryRight"></div>
                                </div>
                            </div>
                        </div>

                        <div className="heroDogCenter col-md">
                            <object id="my-svg" type="image/svg+xml" className="heroDogImg" data={maindog} aria-label="svg"></object>
                        </div>
                        <div className='col-md hero-buy'>
                            <div className={'card heroLeftBlock'}>
                                <div className="card-img-bg">
                                    <a href="/dog-page/335">
                                        <img src="https://token.dog:8010/public/uploadImages/dog-335-nft.svg" className="card-img-top" alt="..." />
                                    </a>
                                </div>
                                <div className="card-body">
                                    <div className="cBodyLeft">
                                        <a href="/dog-page/335" style={{ "width": "200px", "textDecoration": "none", "display": "flex", "flexDirection": "row", "justifyContent": "space-between" }}>
                                            <h5 className="card-title">Side Zone Shorty</h5>
                                            <div className="regPrice">*</div>
                                        </a>
                                        <p className="card-text">Shiba Inu 100%</p>
                                        <div className="priceBottom">
                                        </div>
                                    </div>
                                    <div className="cBoryRight"></div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="heroButtons">
                        <a style={{ textDecoration: "none" }} href="#formContact" className="gradientButton">
                            <img src={sobaLeft} alt="" className="btn-soba-left" />
                            Join the Waitlist now!
                        </a>
                        <a className="overlayButton" href="https://coindogs.com" target="_blank" rel="noreferrer">
                            <img src={logo} alt="" />
                            <span>Game preview</span>
                            <img src={sobaRight} alt="" className="btn-soba-right" />
                        </a>
                    </div>
                </div>
            </div>
        )
    };

export default HeroSection
