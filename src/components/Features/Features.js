//components
import FeatureCard from "../FeatureCard/Feature.Card"
import OverlayedTitle from "../OverlayedTitle/OverlayedTitle"
//styles
import './Features.css'

const Features = () => {
    return(
        <div className="features container-fluid">
            <div className="row">
            <OverlayedTitle>Furry, Reliable, Cuddly</OverlayedTitle>

            <div className="container">
                <div className="row featRow">
                    <FeatureCard
                        type='dog'
                        title='Unique'
                        text="Your Dog will have unique DNA and appearance with up to 6+ Trillion Genetic Possibilities"
                    />
                    <FeatureCard
                        type='zamok'
                        title='Ownership'
                        text="Your dog is 100% yours. You as the owner are free to do whatever you want with your Genesis Dog, sell it, hold it, play the game, or store it in your wallet "
                    />
                    <FeatureCard
                        type='charts'
                        title='Opportunity'
                        text="The NFT market is expanding daily, making this a great opportunity to acquire an asset with utility behind it that will only rise in value as the game is released."
                    />
                </div>
            </div>
        
            </div>
        </div>
    )
}

export default Features