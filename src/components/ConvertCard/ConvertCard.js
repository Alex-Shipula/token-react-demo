
import './ConvertCard.css'

const ConvertCard = (props) => {

    return (
        <>
            <div className="image_block">
                <img src={props.link}></img>
            </div>
        </>
    )
};

export default ConvertCard;