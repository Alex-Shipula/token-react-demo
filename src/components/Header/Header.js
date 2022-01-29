//libraries
import { NavLink } from "react-router-dom";
//images
import logoMetamask from "../../img/Fox.png"
import logo from "../../img/logo.svg";
import { useState, useEffect } from "react";
import Metamask from "../Metamask/Metamask";
import AppWallet from "../AppWallet/AppWallet";
//const axios = require('axios');
import Web3 from 'web3';
const metamask = new Metamask();

const { token_abi } = require('../Metamask/abi');
const TOKEN_CONTRACT_ADDR = "0x17a179D0B1e1035d0bC8C9BCA947A446ACB7594f";
const Contract_721 = "0xcB2f508ecBBD0d57dfD66BfF90a0339989793E57";
const Contract_721_upg = "0x9232D1FFec04cD84905768c4C9007Dc215502187";

//get balance
async function tokenBalanceOff() {
  if (metamask.isMetaMaskInstalled() === true) {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(token_abi, Contract_721, { from: accounts[0] })
    const result = await contract.methods.balanceOf(accounts[0]).call();
    return (result / 10 ** 10)*10000000000;
  }
}
//verification account
async function accountsIsTrue() {
  if (metamask.isMetaMaskInstalled() === true) {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    return (accounts && accounts.length > 0);
  }
}

//Convert response
function convertToJson(res) {
  if (res) {
    const arr = JSON.parse(((res.split('<'))[2].split('>'))[1]);
    return arr
  }
  return null
}

const Header = (props) => {

  const starTop = props.withStarImage === false ? null : "starTop";

  const [balanceDog, setBalanceDog] = useState();
  const [metamaskIsTrue, setMetamaskIsTrue] = useState(false);
  const [metamaskConnected, setMetamaskConnected] = useState(false);
  const [account, setAccount] = useState();
  if (metamaskIsTrue) {
    window.ethereum.on("accountsChanged", () => { setAccount(window.ethereum.selectedAddress) })
  }
  useEffect(() => {
    accountsIsTrue().then(res => { setMetamaskConnected(res) })
  }, []);
  useEffect(() => {
    setMetamaskIsTrue(metamask.isMetaMaskInstalled());
  }, [metamaskIsTrue]);
  useEffect(() => {
    tokenBalanceOff().then(res => { setBalanceDog(res) });
  }, [account,metamaskConnected,metamaskIsTrue]);

  function openMetamask() {
    window.open('https://metamask.io/', "_self");
  }
  function openMint() {
    window.open('https://token.dog/mint/');
  }

  //GET ALL DOG
  // const [responseAll, setResponseAll] = useState( null );
  // useEffect( () => {
  //   axios.get( 'https://dev.coindogs.com/WebService.asmx/GetAllDogs', {
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   } ).then( res => { setResponseAll( convertToJson( res.data ) ) } );
  // }, [] );

  //GET ONE DOG
  // const [response, setResponse] = useState( null );
  // useEffect( () => {
  //   axios.get( 'https://dev.coindogs.com//WebService.asmx/GetDog?dogId=1', {
  //     headers: {
  //       "Content-Type": "application/json"
  //     }
  //   } ).then( res => { setResponse( convertToJson( res.data ) ) } );
  // }, [] );

  return (
    <div className={`container-fluid ${starTop}`}>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container topNav">
          <div className="navbar-header-social">
            <NavLink className="navbar-brand" to="/">
              <img src={logo} alt="Coin Dogs"></img>
            </NavLink>
            <div className="top-social-links">
              <a href="https://www.instagram.com/coindogs/" target="_blank" className="scroll-to" rel="noreferrer"><i className="fab fa-instagram"></i></a>
              <a href="https://www.facebook.com/CoinDogs" target="_blank" className="scroll-to" rel="noreferrer"><i className="fab fa-facebook-square"></i></a>
              <a href="https://twitter.com/CoinDogs" target="_blank" className="scroll-to" rel="noreferrer"><i className="fab fa-twitter"></i></a>
              <a href="https://t.me/Coindogs_official" target="_blank" className="scroll-to" rel="noreferrer"><i className="fab fa-telegram-plane"></i></a>
              <a href="https://discord.com/invite/KUyUh3PuGx" target="_blank" className="scroll-to" rel="noreferrer"><i className="fab fa-discord"></i></a>
            </div>
            <div className="navbar-tog">
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
            </div>
          </div>
          <div
            className="collapse navbar-collapse justify-content-end "
            id="navbarSupportedContent"
          >
            <nav className="navbar-nav mb-2 mb-lg-0">
              <NavLink
                to="/"
                className="nav-link"
                aria-disabled="true"
              >
                <div style={(metamaskIsTrue === true) ? { display: 'none' } : {}} className="metamask-logo-connect">
                  <div className="connect-metamask" onClick={openMetamask} >Install</div>
                  <img src={logoMetamask} className="logo-metamask" alt=""></img>
                </div>
              </NavLink>
              <NavLink
                to="/"
                className="nav-link"
                aria-disabled="true"
              >
                <div className="balanceDog" style={((metamaskIsTrue === true) && (metamaskConnected === true)) ? {} : { display: 'none' }} >{balanceDog} Coins</div>
                <div className="balanceDog" style={((metamaskIsTrue === true) && (metamaskConnected === true)) ? { display: 'none' } : {}} >0 Coins</div>
              </NavLink>
              <AppWallet />
              {/* <NavLink
                to="/buy"
                className="nav-link"
                aria-disabled="true"
              >
                Buy coins
              </NavLink> */}
              <NavLink
                to="/market"
                className="nav-link"
                aria-disabled="true"
              >
                Market
              </NavLink>            
              <NavLink
                to="/breed"
                className="nav-link"
                aria-disabled="true"
              >
                Breed
              </NavLink>
              <NavLink
                to="/mint"
                className="nav-link"
                aria-disabled="true"
              >
                Mint
              </NavLink>
              <NavLink
                to="/settings"
                className="nav-link"
                aria-disabled="true"
              >
                Settings
              </NavLink>
            </nav>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
