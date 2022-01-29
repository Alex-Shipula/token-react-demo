
//styles
import './CardDog.css'

export const CardDog = ( props ) => {

    return (
        <a href={`/dog-page/${ props.id }`} >
            <div className="col-md">
                <div className="card">
                    <div className="card-img-bg">
                        <img src={props.img} className="card_img" alt="..." />
                    </div>
                </div>
            </div>
        </a>
    )
}