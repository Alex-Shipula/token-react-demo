
//components
import { useEffect, useState } from "react"
import Card from "../components/Card/Card"
import Footer from "../components/Footer/Footer"
import Header from "../components/Header/Header"
import Pagination from "../components/Pagination/Pagination"
import Profile from "../components/Profile/Profile"
import { dogsURL } from "../constants/URLs"
import { price, unity } from "../constants/Price"
//images
import divider from "../img/hr-color.png"


const axios = require('axios');
const pageRowsCount = 3;
const pageCellCount_small = 3;
const pageCellCount_normal = 4;


function Market(props) {

    const [dogs, setDogs] = useState([]);
    const [, setAlldogs] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [, setRowsCount] = useState(0);
    const [rowsCountArr, setRowsCountArr] = useState([]);
    const [dogsCount, setDogsCount] = useState(0);
    const [pageCount, setPageCount] = useState(1);
    const [, setChangeDogs] = useState([]);
    const [curGen, setCurGen] = useState(-1);
    const [curBreed, setCurBreed] = useState("");
    const [Owner_ID, setOwner_ID] = useState(props.currentUser ?? 0);
    const [isNFT, setIsNFT] = useState(0);
    const [settings] = useState([]);
    const [showElements] = useState(props.showElementsStatus);
    const [showConvertPage] = useState(props.ShowConvertPage);
  
    useEffect(() => {
        getAllDogs(1, (props.currentUser ?? 0));
    },[]);

    async function getAllDogs(pageNumber, ownerID) {
        try {
            let pageCellCount = (props.showElementsStatus) ? pageCellCount_normal : pageCellCount_small;
            axios.get(dogsURL).then((resp) => {
                let alldogs = setQuality(resp.data);
                let dogs = [];
                if (ownerID > 0) {
                    alldogs.map((dog, i) => {
                        if (
                            dog.Owner_ID === ownerID
                        ) {
                            dogs[dogs.length] = dog;
                        }
                        return alldogs;
                    });
                }
                else {
                    alldogs.map((dog) => {
                        dogs.push(dog);
                        return alldogs;
                    });
                }
                let rowsCount = Math.ceil(dogs.length / pageCellCount);
                let rowsCountArr = [];
                let rowsCountMax = (pageNumber - 1) * (pageRowsCount) + pageRowsCount;
                if (rowsCountMax > rowsCount) {
                    rowsCountMax = rowsCount;
                }
                for (let i = (pageNumber - 1) * (pageRowsCount); i < rowsCountMax; i++) {
                    rowsCountArr.push(i);
                }
                setDogs(dogs);
                setAlldogs(alldogs);
                setPageNumber(pageNumber);
                setRowsCount(rowsCountMax);
                setRowsCountArr(rowsCountArr);
                setDogsCount(dogs.length);
                setPageCount(Math.ceil(dogs.length / (pageCellCount * pageRowsCount)));
            });
        } catch (error) {
            console.error(error)
        }
    }

    function reRenderPageDogs(pageNumber, dogs) {
        let pageCellCount = (props.showElementsStatus) ? pageCellCount_normal : pageCellCount_small;
        let rowsCount = Math.ceil(dogs.length / pageCellCount);
        let rowsCountArr = [];
        let rowsCountMax = (pageNumber - 1) * (pageRowsCount) + pageRowsCount;
        if (rowsCountMax > rowsCount) {
            rowsCountMax = rowsCount;
        }
        for (let i = (pageNumber - 1) * (pageRowsCount); i < rowsCountMax; i++) {
            rowsCountArr.push(i);
        }
        setRowsCountArr(rowsCountArr);
        setRowsCount(rowsCountMax);
        setPageNumber(pageNumber);
        setDogsCount(dogs.length);
        setPageCount(Math.ceil(dogs.length / (pageCellCount * pageRowsCount)));
    }

    function reRenderGenDogs(gen) {
        setCurGen({ curGen: gen });
        let dogs = [];
        dogs.map((dog, i) => {
            if (
                ((isNFT < 0) || (((dog.IsNFT ?? 0) === isNFT) || ((dog.IsOnSale ?? 0) === isNFT)))
                && ((gen < 0) || (dog.Generation === gen))
                && ((curBreed === "") || (dog.TopBreedComposition_FullInfo.includes(curBreed)))
                && ((Owner_ID === 0) || (dog.Owner_ID === Owner_ID))
            ) {
                dogs[dogs.length] = dog;
            }
            return dogs;
        });
        setChangeDogs(dogs);
        reRenderPageDogs(1, dogs)
    }

    function reRenderBreedDogs(breed) {
        setCurBreed({ curBreed: breed });
        let dogs = [];
        dogs.map((dog, i) => {
            if (
                ((isNFT < 0) || (((dog.IsNFT ?? 0) === isNFT) || ((dog.IsOnSale ?? 0) === isNFT)))
                && ((curGen < 0) || (dog.Generation === curGen))
                && ((breed === "") || (dog.TopBreedComposition_FullInfo.includes(breed)))
                && ((Owner_ID === 0) || (dog.Owner_ID === Owner_ID))
            ) {
                dogs[dogs.length] = dog;
            }
            return dogs;
        });
        setChangeDogs(dogs);
        reRenderPageDogs(1, dogs);
    }

    function reRenderNameDogs(name) {
        let Owner_ID = 0;
        settings.map((setting, i) => {
            if (setting.Email === name) {
                Owner_ID = setting.UserID;
            }
            return settings;
        });
        setOwner_ID(Owner_ID);
        let dogs = [];
        dogs.map((dog, i) => {
            if (
                ((isNFT < 0) || (((dog.IsNFT ?? 0) === isNFT) || ((dog.IsOnSale ?? 0) === isNFT)))
                && ((curGen < 0) || (dog.Generation === curGen))
                && ((curBreed === "") || (dog.TopBreedComposition_FullInfo.includes(curBreed)))
                && ((Owner_ID === 0) || (dog.Owner_ID === Owner_ID))
            ) {
                dogs[dogs.length] = dog;
            }
            return dogs;
        });
        setChangeDogs(dogs);
        reRenderPageDogs(1, dogs)
    }

    function reRenderNFTDogs(isNFT) {
        setIsNFT(isNFT);
        let dogs = [];
        dogs.map((dog, i) => {
            if (
                ((isNFT < 0) || (((dog.IsNFT ?? 0) === isNFT) || ((dog.IsOnSale ?? 0) === isNFT)))
                && ((curGen < 0) || (dog.Generation === curGen))
                && ((curBreed === "") || (dog.TopBreedComposition_FullInfo.includes(curBreed)))
                && ((Owner_ID === 0) || (dog.Owner_ID === Owner_ID))
            ) {
                dogs[dogs.length] = dog;
            }
            return dogs;
        });
        setChangeDogs(dogs);
        reRenderPageDogs(1, dogs);
    }

    function reRenderPurchasePrice(val) {
        if (Number(val) === -1) {
            dogs.sort((a, b) => {
                return Number(b.PurchasePrice) - Number(a.PurchasePrice)
            });
            reRenderPageDogs(1, dogs);
        } if (Number(val) === 1) {
            dogs.sort((a, b) => {
                return Number(a.PurchasePrice) - Number(b.PurchasePrice)
            });
            reRenderPageDogs(1, dogs);
        }
    }

    function reRenderPurityPer(val) {
        if (Number(val) === -1) {
            dogs.sort((a, b) => {
                return Number(b.PurityPer) - Number(a.PurityPer)
            });
            reRenderPageDogs(1, dogs);
        } if (Number(val) === 1) {
            dogs.sort((a, b) => {
                return Number(a.PurityPer) - Number(b.PurityPer)
            });
            reRenderPageDogs(1, dogs);
        }
    }

    function pageClick(i) {
        reRenderPageDogs(i, dogs);
    }
    function changePurchasePrice(value) {
        reRenderPurchasePrice(value);
    }
    function changePurityPer(value) {
        reRenderPurityPer(value);
    }
    function changeGen(value) {
        reRenderGenDogs(value);
    }
    function changeBreed(value) {
        reRenderBreedDogs(value);
    }
    function changeName(value) {
        reRenderNameDogs(value);
    }
    function changeNFT(value) {
        reRenderNFTDogs(value);
    }

    function getQuality(str) {
        if (str.includes("%")) {
            let last_index = str.lastIndexOf(" ");
            let end_index = str.lastIndexOf("%");
            return str.substr(last_index + 1, (end_index - last_index - 1));
        }
        return "100";
    };

    function setQuality(arr) {
        arr.map((el) => {
            let quality = parseInt(getQuality(el.TopBreedComposition_FullInfo));
            el.Quality = quality;
            el.Price = `${price[quality]} ${unity}`;
            return arr;
        });
        return arr.sort((a, b) => a.Quality < b.Quality ? 1 : -1);
    }

    const pageArr = [];
        (function renderPage() {
            if (pageCount > 1) {
                pageArr.push(<Pagination pageClick={pageClick} curPage={pageNumber} pageCount={pageCount} />);
            }
        })();

    const dogsArr = [];
        (function renderDogs() {
            let pageCellCount = (props.showElementsStatus) ? pageCellCount_normal : pageCellCount_small;
            rowsCountArr.map((row) => {
                const cards = [];
                for (let j = 0; j < pageCellCount; j++) {
                    let dog_j = row * pageCellCount + j;
                    if ((dog_j < dogsCount)) {
                        cards.push(<Card isMarket={true} isOnSale={(dogs[dog_j].IsOnSale === 1)} price={""} isNFT={(dogs[dog_j].IsNFT === 1)} convertShowPage={showConvertPage} dogid={dogs[dog_j].DogID} name={dogs[dog_j].Name} img={dogs[dog_j].CurImage} text={dogs[dog_j].TopBreedComposition_FullInfo} />);
                    }
                }
                dogsArr.push(<div className="row row-cols-2">
                    {cards}
                </div>
                )
                return rowsCountArr;
            }); 
        })();

    return (
        <>
            {
                showElements ? <Header /> : null
            }
            <div className="bodyWrapper market">
                <Profile changePurityPer={changePurityPer} changePurchasePrice={changePurchasePrice} />
                <img src={divider} style={{ width: '100%' }} alt="" />
                <div className="container-fluid todayMarket myDogs">
                    {dogsArr}
                    {pageArr}
                </div>

                {
                    showElements ? <Footer /> : null
                }
            </div>
        </>
    )
}

export default Market;