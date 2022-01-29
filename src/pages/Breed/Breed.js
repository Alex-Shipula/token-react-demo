import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import './Breed.css'
import BreedButton from "../../components/BreedButton/BreedButton"
import BreedButtonCancel from "../../components/BreedButton/BreedButtonCansel"
import ConvertCard from "../../components/ConvertCard/ConvertCard"
//import { dogsURL } from "../../constants/URLs"
import Metamask from "../../components/Metamask/Metamask.js"
//import { price, unity } from "../../constants/Price"
import dogone from "../../img/dod001.png"
import dogtwo from "../../img/dod002.png"

const metamask = new Metamask()
const axios = require('axios');

// function GetDogIdFromURL() {
//     let url = window.location.href;
//     let dogid = url.substr(url.lastIndexOf("/") + 1, (url.length - url.lastIndexOf("/") - 1))
//     return dogid;
// }

const Breed = (props) => {

    //constructor(props) {
    // super();
    // let dogid = GetDogIdFromURL();
    // this.state = {
    //     dogid: dogid,
    //     img: "",
    //     quality: 100
    // }
    // this.getdog(dogid);
    // this.handleNextClick = this.handleNextClick.bind(this);
    // }
    // getQuality(str) {
    //     let result = "100";
    //     if (str.indexOf("%") > -1) {
    //         let last_index = str.lastIndexOf(" ");
    //         let end_index = str.lastIndexOf("%");
    //         result = str.substr(last_index + 1, (end_index - last_index - 1));
    //     }
    //     return result;

    // }
    // getdog(dog_id) {

    //     let path = dogsURL + "/" + dog_id;
    //     console.log(path);
    //     axios.get(path).then((resp) => {
    //         let quality = this.getQuality((resp.data.TopBreedComposition_FullInfo == null) ? " 100%" : resp.data.TopBreedComposition_FullInfo);
    //         console.log(quality);
    //         this.setState({ img: resp.data.Image });

    //         this.setState({ quality: quality });
    //         console.log(resp.data.Image);
    //     })

    // }
    // async mintDog() {
    //     await metamask.connect()

    //     if (!metamask.isMetaMaskConnected())
    //         return false;

    //     const result = await metamask.mintDog(metamask.accounts[0], GetDogIdFromURL());
    //     console.log("Mint result: ", result);
    // }

    return (
        <>
            <Header />
            <div class="bg-white">
                <div class="container mt-5">
                    <div class="row ">
                        <span class="text-center style_text_select mb-5">Breed your dog</span>
                        <div class="d-flex justify-content-center">
                            <div class="mt-5"><ConvertCard link={dogone} /></div>
                            <div class="convert_center_block "><img src="https://temp.coindogs.com/l/img/arrow10.png" alt=""></img></div>
                            <div class="mt-5 "><ConvertCard link={dogtwo} /></div>
                        </div>
                        {/* <div class="d-flex justify-content-center mt-4">
                          <span class="total">Total cost:<span class="price">&nbsp;{price[this.state.quality]+" "+ unity}</span></span>
                      </div> */}
                        <div class="d-flex justify-content-center mt-4">
                            <BreedButton text="Breed" />
                            <BreedButtonCancel text="Cancel" href="/" />
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
};
export default Breed;