import { useEffect, useState } from "react";
//components
import { CardDog } from "../components/UI/CardDog/CardDog";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import { Scale } from "../components/UI/Scale/Scale";
//images
import nft from "../img/nft.png";

const axios = require( "axios" );

//Convert responseOneDog
function convertToJson( res ) {
  if ( res ) {
    const arr = JSON.parse( ( ( res.split( '<' ) )[2].split( '>' ) )[1] );
    return arr
  }
  return null
}

//Get dog ID from URL
function GetDogParam() {
  const url = window.location.href;
  const dogid = url.substr(
    url.lastIndexOf( "/" ) + 1,
    url.length - url.lastIndexOf( "/" ) - 1
  );
  return dogid;
}

function DogPage() {
  const [responseOneDog, setResponseOneDog] = useState( null );
  const [dogData, setDogData] = useState( null );

  //Get one dog
  useEffect( () => {
    try {
      axios.get( `https://dev.coindogs.com/WebService.asmx/GetDog?dogId=${ GetDogParam() }`, {
        headers: {
          "Content-Type": "application/json"
        }
      } ).then( res => { setResponseOneDog( convertToJson( res.data ) ) } );
    } catch ( error ) {
      console.log( error );
    }
  }, [] );

  //Get dog parents and children 
  useEffect( () => {
    try {
      axios.get( `https://dev.coindogs.com/WebService.asmx/GetDogInfo?dogId=${ GetDogParam() }`, {
        headers: {
          "Content-Type": "application/json"
        }
      } ).then( res => { setDogData( convertToJson( res.data ) ) } );
    } catch ( error ) {
      console.log( error );
    }
  }, [] );

  return (
    <>
      <Header />
      <div className="bodyWrapper dog-page">
        <div className="dogPageContainer">
          <div className="row dpRow">
            <div className="col-xs col-lg-5">
              <div className="card dogImgContainer">
                <div className="card-img-bg ">
                  <div className="dogImgBage">
                    <img src={nft} alt="" />
                  </div>
                  <img src={responseOneDog ? `https://dev.coindogs.com${ responseOneDog.ImagePath }` : "Loading image..."} className="" alt="..." />
                </div>
              </div>
            </div>
            <div className="col-xs col-lg-6">
              <div className="dogName" style={{ "text-align": "center" }}>{responseOneDog ? responseOneDog.Dog.Name : "Loading..."}</div>
              <div className="owner" style={{ "text-align": "center" }}>
                {dogData ? dogData.Dog.OwnerName : "Loading..."}<span className="owmerName" />
              </div>
              <div className="ownerTextBottom" style={{ "text-align": "center" }}>
                {dogData ? dogData.Dog.Bio : "Loading..."}
              </div>
              <div className="dogAbout">
                <div className="par">
                  <div className="parTitle">Purity</div>
                  <div className="parText">{responseOneDog ? responseOneDog.Dog.PurityPer : "Loading..."}%</div>
                </div>
                <div className="par">
                  <div className="parTitle">Age</div>
                  <div className="parText"> {responseOneDog ? responseOneDog.Dog.AgeInWords : "Loading..."}</div>
                </div>
                <div className="par">
                  <div className="parTitle">Racing Exp</div>
                  <div className="parText">{responseOneDog ? responseOneDog.Dog.Race_EXP : "Loading..."}</div>
                </div>
              </div>
              <div className="dogAbout">
                <div className="par">
                  <div className="parTitle">Ecstatic & Fast</div>
                  <div className="parText">Energy: {dogData ? dogData.Dog.Energy : "Loading..."}</div>
                </div>
              </div>
              <div className="dogStats" style={{ "text-align": "center" }}>
                <b>{responseOneDog ? responseOneDog.Dog.TopBreedComposition_FullInfo : "Loading..."}</b> | {responseOneDog ? responseOneDog.Dog.Races : "Loading..."} races | Gen{" "}
                {responseOneDog ? responseOneDog.Dog.Generation : "Loading..."}
              </div>
              <div className="racingStats">
                <div className="dpTitles" style={{ "text-align": "center" }}>Racing Stats</div>
                <div className="rsData">
                  <div className="rsCol">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td colspan="2">
                            {responseOneDog ? responseOneDog.Dog.Races : "Loading..."} races | <img src="#" alt=""></img>{" "}
                            <span className="goldM">{responseOneDog ? responseOneDog.Dog.Gold : "Loading..."}</span>{" "}
                            <img src="#" alt="" />{" "}
                            <span className="silverM">{responseOneDog ? responseOneDog.Dog.Silver : "Loading..."}</span>{" "}
                            <img src="#" alt="" />{" "}
                            <span className="bronzeM">{responseOneDog ? responseOneDog.Dog.Bronze : "Loading..."}</span>
                          </td>
                        </tr>
                        <tr>
                          <td colspan="2">{dogData ? dogData.Dog.Wins : "Loading..."}</td>
                        </tr>
                        <tr>
                          <td>Rank</td>
                          <td>{dogData ? dogData.Dog.RankBestTime100 : "Loading..."}</td>
                        </tr>
                        <tr>
                          <td>Scheduled races</td>
                          <td>{dogData ? dogData.Dog.ScheduledRaces : "Loading..."}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="rsCol">
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>Best Time</td>
                          <td>{responseOneDog ? responseOneDog.Dog.BestTime : "Loading..."} s</td>
                        </tr>
                        <tr>
                          <td>Racing</td>
                          <td>0.0 Pts</td>
                        </tr>
                        <tr>
                          <td>Breeding</td>
                          <td>0.0 Pts</td>
                        </tr>
                        <tr>
                          <td>Total</td>
                          <td>0.0 Pts</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className="dnaAnalys">
                <div className="dpTitles" style={{ "text-align": "center" }}>DNA Analysis</div>
                <div className="dnaSeq" style={{ "text-align": "center" }}>
                  DNA Sequence:
                  <span className="seqResult">{dogData ? dogData.Dog.DNA_SEQUENCE : "Loading..."}</span>
                </div>
                <div className="dnaSeq" style={{ "text-align": "center" }}>
                  Genes:
                  <span className="seqResult">{dogData ? dogData.Dog.Genes : "Loading..."}</span>
                </div>
              </div>
              <div className="analysis-section__row row">
                <div className="analysis-section__col col-lg">
                  <h3 className="analysis-section__col-title">Composition</h3>
                  <table className="analysis-section__table analysis-section__table--composition">
                    <tbody>
                      {dogData ? dogData.Dog.UniqueCompositionList.map( ( dog, i ) => {
                        return (
                          <tr key={i}>
                            <th>{dog.Item1}</th>
                            <td>
                              <div className="analysis-section__level-wrapper">
                                <Scale width={( dog.Item2 > 85 ) ? ( dog.Item2 - 20 ) : dog.Item2} />
                                <div className="analysis-section__level-text">{dog.Item2}%</div>
                              </div>
                            </td>
                          </tr>
                        )
                      } ) : <div />}
                    </tbody>
                  </table>
                  <h3 className="analysis-section__col-title nrg-title">Current Energy</h3>
                  <table className="analysis-section__table analysis-section__table--composition">
                    <tbody>
                      <tr>
                        <th>Vitality</th>
                        <td>{dogData ? dogData.Dog.Vitality : "Loading..."} points</td>
                      </tr>
                      <tr>
                        <th>Lunar Effect</th>
                        <td>{dogData ? dogData.Dog.Lunar_Effect : "Loading..."} points</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="analysis-section__col">
                  <h3 className="analysis-section__col-title text-center traits">Traits Breakdown</h3>
                  <table className="analysis-section__table analysis-section__table--traits">
                    <tbody>
                      {dogData ? dogData.Dog.Traits.map( ( dog, i ) => {
                        return (
                          <tr key={i}>
                            <th>{dog.Item1}</th>
                            <td>{dog.Item2}</td>
                          </tr>
                        )
                      } ) : <div />}
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="dogParents">
                <div className="dpTitles" style={{ "text-align": "center" }}>Parents</div>
                <div className="parentsBlock" >
                  {dogData ? dogData.Parents.map( ( dog, i ) => {
                    return (
                      <CardDog
                        key={i}
                        id={dog.Id}
                        img={`https://dev.coindogs.com/${ dog.Image }`}
                      />
                    )
                  } ) : <div />}
                </div>
              </div>
              <div className="dogChildren">
                <div className="dpTitles" style={{ "text-align": "center" }}>Children</div>
                <div className="childrenBlock">
                  {dogData ? dogData.Children.map( ( dog, i ) => {
                    return (
                      <CardDog
                        key={i}
                        id={dog.Id}
                        img={`https://dev.coindogs.com/${ dog.Image }`}
                      />
                    )
                  } ) : <div />}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}
export default DogPage;