//components
import Card from "../Card/Card"
import OverlayedTitle from "../OverlayedTitle/OverlayedTitle"
//styles
import './TodayMarket.css'

const TodayMarket = () => {
   
        return (
            <div className="container-fluid todayMarket" >
                <OverlayedTitle>HOW YOUR DOGS WILL LOOK LIKE</OverlayedTitle>
                <div className="row row-cols-2 todayRow">
                    <Card isOnSale={true} price isNFT convertShowPage={false} dogid={2921} name="Kibbles Kate" img="https://token.dog:8010/public/uploadImages/dog-2921-nft.svg" text="French Bulldog 100%" />
                    <Card isOnSale={true} price isNFT convertShowPage={false} dogid={324} name="Kenshi Kermit" img="https://token.dog:8010/public/uploadImages/dog-324-nft.svg" text="Golden Retriever 100%" />
                    <Card isOnSale={true} price isNFT convertShowPage={false} dogid={377} name="Dudley Daffy" img="https://token.dog:8010/public/uploadImages/dog-377-nft.svg" text="German Shepard 100%" />
                    <Card isOnSale={true} price isNFT convertShowPage={false} dogid={2911} name="Betsy Boris" img="https://token.dog:8010/public/uploadImages/dog-2911-nft.svg" text="Dachshund 100%" />

                </div>
                <div className="row todaySecondRow">
                    <Card isOnSale={true} price isNFT convertShowPage={false} dogid={2898} name="Cisco Chamberlain" img="https://token.dog:8010/public/uploadImages/dog-2898-nft.svg" text="Beagle 100%" />
                    <Card isOnSale={true} price isNFT convertShowPage={false} dogid={522} name="Snowflake Scruffy" img="https://token.dog:8010/public/uploadImages/dog-522-nft.svg" text="Border Collie 100%" />
                    <Card isOnSale={true} price isNFT convertShowPage={false} dogid={2114} name="Snop Speed Bump" img="https://token.dog:8010/public/uploadImages/dog-2114-nft.svg" text="Corgi 100%" />
                    <Card isOnSale={true} price isNFT convertShowPage={false} dogid={1885} name="Waffles Wesley" img="https://token.dog:8010/public/uploadImages/dog-1885-nft.svg" text="Boxer 100%" />
                </div>
            </div>
        )
    };

export default TodayMarket