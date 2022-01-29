import { useState, useEffect } from "react";
import Web3 from 'web3';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Metamask from "../../components/Metamask/Metamask";
import './Mint.css';
import dog from '../../img/dod001.png';
import dogBefore from '../../img/imgMint/soba-right.png'


const metamask = new Metamask();
const CONTRACT_ADDR = "0x038072f4e829ac3eE9BB3D582Cc1e21Ef6E12773";
const { abi_mint } = require('../../components/Metamask/abi');

//Timer
const countDownDate = new Date("Feb 01, 2022 20:00").getTime();
let x = setInterval(() => {

    let now = new Date().getTime();
    let cdId = document.getElementById("aircount");

    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
    let days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    if (cdId) {
        cdId.innerHTML = `
           <div class="timerItem">${weeks} 
           WEEKS </div>
           <div class="timerItem">${days} 
           DAYS </div>
           <div class="timerItem"> ${hours} 
           HOURS </div>
           <div class="timerItem"> ${minutes} 
           MIN </div>
          `;
    } else {
        console.log('none');
    }

    if (distance < 0) {
        clearInterval(x);
        if (cdId) {
            cdId.innerHTML = "EXPIRED";
        } else {
            console.log('none');
        }
    }
}, 1000);


function Mint() {

    const [account, setAccount] = useState(false);
    const [metamaskIsTrue] = useState(metamask.isMetaMaskInstalled());
    const [data, setData] = useState({});
    const [signature, setSignature] = useState(null);
    const [resultSign, setResultSign] = useState(false);
    const [resultMint, setResultMint] = useState(false);
   
    if (metamaskIsTrue) {
        window.ethereum.on("accountsChanged", () => { setAccount(window.ethereum.selectedAddress) })
    }

    useEffect(() => {
        if (metamaskIsTrue) {
            setAccount(window.ethereum.selectedAddress)
        }
    }, [account, metamaskIsTrue]);

    async function signMint() {
        if (metamaskIsTrue && account) {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(abi_mint, CONTRACT_ADDR, { gas: 3000000 });
            const nonce = await contract.methods.nonces(account).call();
            const deadline = Date.now() + 60 * 60; //1 hour
            setData({
                spender: account,
                amount: 2,
                price: 1,
                deadline: deadline,
                value: 2
            });
            const msgParams = JSON.stringify({
                domain: {
                    chainId: 4,
                    name: 'TokenDogs',
                    verifyingContract: CONTRACT_ADDR,
                    version: '1',
                },

                message: {
                    spender: account,
                    amount: 2,
                    price: 1,
                    nonce: nonce,
                    deadline: deadline
                },
                primaryType: 'Mint',
                types: {
                    EIP712Domain: [
                        { name: 'name', type: 'string' },
                        { name: 'version', type: 'string' },
                        { name: 'chainId', type: 'uint256' },
                        { name: 'verifyingContract', type: 'address' },
                    ],
                    Mint: [
                        { name: 'spender', type: 'address' },
                        { name: 'amount', type: 'uint256' },
                        { name: 'price', type: 'uint256' },
                        { name: 'nonce', type: 'uint256' },
                        { name: 'deadline', type: 'uint256' },
                    ]
                },
            });

            const from = account;
            const params = [from, msgParams];
            const method = 'eth_signTypedData_v4';
            const result = web3.currentProvider.sendAsync({ method, params, from }, (err, res) => {
                setSignature({
                    "v": Number("0x" + res.result.substr(-2)),
                    "r": res.result.substr(0, 66),
                    "s": "0x" + res.result.substr(66, 64)
                });
                setResultSign(res.result);
            });
        }
    }

    async function Mint() {
        if (metamaskIsTrue && account && signature) {
            const web3 = new Web3(window.ethereum);
            const contract = new web3.eth.Contract(abi_mint, CONTRACT_ADDR, { gas: 3000000 });
            try {
                const result = await contract.methods.buyDogToken(data.spender, data.amount, data.price, data.deadline, signature.v, signature.r, signature.s)
                    .send({ from: account, value: data.value });
                return result;
            } catch (e) {
                console.log("FAILED!!! " + JSON.stringify(e));
            }
        }
    }

    const  heandlerConnectMeta = async() => {
        if (metamaskIsTrue) {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            setAccount(accounts[0]);
        } else {
            window.open('https://metamask.io/', "_self");
        }
    };
    const heandlerSignMint = () => {
        signMint()
    };
    const heandlerMint = () => {
        Mint().then(res => { setResultMint(JSON.stringify(res)) });
        setResultSign(false);
    };
    console.log(signature);
    console.log(resultSign);
    console.log(resultMint);

    return (
        <div className='main'>
            <Header />
            <div className="countd0wn-block">
                <div className="container-overlayed-title">
                    <div className="blockTitleOverlay">mint starts in</div>
                    <div className="blockTitle">mint starts in</div>
                </div>
                <div className="container countAir" id="aircount"></div>
            </div>
            <div className="container polzunok">
                <div className="polzunok__inner">
                    <div className="pol-title">
                        Mint your Genesis NFT Dog
                    </div>
                    <div className="before-line">
                        <div className="before__left"> Purity
                            <div className="upper-white">Gen 0 CoinDog</div>
                        </div>
                        <div className="with-ribbon">
                            <output className="before__center">
                                <img src={dog} alt="" />
                            </output>
                        </div>
                        <div className="before__right">
                            Fixed supply
                            <div className="upper-white">
                                <img src={dogBefore} alt="" /> 10.000 NFT
                            </div>
                        </div>
                    </div>
                    <div className="book-line-text">
                        Amount to book:
                    </div>
                    <input type="range" value="0" step="1" min="0" max="10" />
                    <div className="rule-bottom">
                        <div className="">0</div>
                        <div className="li"></div>
                        <div className="li"></div>
                        <div className="li"></div>
                        <div className="li"></div>
                        <div className="">5</div>
                        <div className="li"></div>
                        <div className="li"></div>
                        <div className="li"></div>
                        <div className="li"></div>
                        <div className="">10</div>
                    </div>
                    <small id="helper" className="slideRight">Slide to get started</small>
                    <h2 style={{ "margin-bottom": "50px" }}></h2>
                    {(account && !resultSign && !resultMint) ?
                        <div className="output-button-wrapper" onClick={heandlerSignMint}>
                            Sign
                        </div> :
                        (account && resultSign) ?
                            <div className="output-button-wrapper" onClick={heandlerMint}>
                                Mint your dog
                            </div>
                            :
                            <div className="output-button-wrapper" onClick={heandlerConnectMeta}>
                                Connect Metamask
                            </div>
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
};
export default Mint;