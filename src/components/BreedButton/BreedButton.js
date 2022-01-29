
import './BreedButton.css'

const BreedButton = (props) => {

    return (
        <>
            <a {...props} href={props.link} className="filled-button button_active">{props.text}</a>
        </>
    )
};

export default BreedButton;