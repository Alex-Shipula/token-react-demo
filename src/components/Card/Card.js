//images
import dod003 from '../../img/dod003.png'
import nft from '../../img/nft.png'
//styles
import './Card.css'

const Card = (props) => {
    return (
        <div className="col-md">
            <div className="card">
                <a href={`/dog-page/${props.dogid ?? 0}`} dog_id={props.dogid ?? 0}>
                    <div className="card-img-bg">
                        <div style={props.isNFT ? {} : { display: "none" }} className="ready2nft">
                            <img src={nft} alt="" />
                        </div>
                        <img src={props.img ?? dod003} className="card_img" alt="..." />
                    </div>
                </a>
                <div className="card-body">
                    <div className="cBodyLeft">
                        <a href={`/dog-page/${props.dogid ?? 0}`} dog_id={props.dogid ?? 0} style={{ "width": "200px", "textDecoration": "none", "display": "flex", "flexDirection": "row" }}>
                            <h5 className="card-title">{props.name ?? ""}</h5>
                            <div className="regPrice" style={{ "marginLeft": "10px" }}></div>
                        </a>
                        <p className="card-text">{props.text ?? "Sell"}</p>
                        <div className="priceBottom">
                            <div style={props.isOnSale ? {} : { display: "none" }} className="regPrice">{props.price ?? ""}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;