import { useState, useEffect } from "react";
import Metamask from "../components/Metamask/Metamask";
import Web3 from 'web3';
const metamask = new Metamask();


const { mixer_abi } = require('../components/Metamask/abi');

const MIXER_CONTRACT_ADDR = "0x17a179D0B1e1035d0bC8C9BCA947A446ACB7594f";
const TEST_Contract = "0xC22640501cF851AA40374a7fEf2F33a39151c0f6";

async function tokenPurchasePurse(valueEth) {
    if (metamask.isMetaMaskInstalled() === true) {
        let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(Web3.givenProvider);
        const gas = await web3.eth.estimateGas({ to: TEST_Contract });
        const result = await web3.eth.sendTransaction(
            {
                gas,
                to: TEST_Contract,
                from: accounts[0],
                value: valueEth
            },
            (error) => {
                if (error) {
                    return console.error(error);
                }
            }
        );
        return result;
    }
}

async function tokenPurchaseContract(valueEth) {
    if (metamask.isMetaMaskInstalled() === true) {
        let accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(Web3.givenProvider);
        const gas = await web3.eth.estimateGas({ from: MIXER_CONTRACT_ADDR });
        const contract = new web3.eth.Contract(mixer_abi, MIXER_CONTRACT_ADDR, { gas: gas});
        const result = await contract.methods.buyDogCoins().send({ from: accounts[0], value: valueEth });
        return result;
    }
}

function Buy () {

    const [priceDog] = useState(0.01);
    const [, setCount] = useState();
    const [price, setPrice] = useState();
    const [transactionHash, setTransactionHash] = useState();
    const [metamaskIsTrue, setMetamaskIsTrue] = useState(false);

    useEffect(() => {
        setMetamaskIsTrue(metamask.isMetaMaskInstalled());
    }, [metamaskIsTrue]);

    const priceWEI = String(price * 1000000000000000000);

    return (
        <div>
            <div className="modal-dialog">
                <div className="modal-content" >
                    <div className="modal-header">
                        <h5 className="modal-title text-center" id="staticBackdropLabel">
                            deposite
                        </h5>
                        <a type="button" className="btn-close" href={"/"} > </a>

                    </div>
                    <div className="modal-body">
                        <div className="mb-3">
                            <label for="inputCounter" className="form-label">
                                DOG:
                            </label>
                            <input
                                type="number"
                                className="curr-input form-control"
                                id="inputCounter"
                                min="1"
                                onChange={() => {
                                    setPrice((Math.abs(priceDog * (Number(document.getElementById("inputCounter").value)))).toFixed(2));
                                    setCount(Number(document.getElementById("inputCounter").value));
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label for="inputPrice" className="form-label">
                                ETH:
                            </label>
                            <input
                                type="text"
                                className="curr-input form-control"
                                id="inputPrice"
                                placeholder="Search Currency"
                                value={price}
                            />
                        </div>
                    </div>
                    <div className="modal-footer amount-btn">
                        <a href="#modalWait" onClick={() => tokenPurchasePurse(priceWEI).then(res => { setTransactionHash(res.transactionHash) })}
                            className="btn grad-modal-button"
                            data-bs-toggle="modal"
                        >Continue</a>
                    </div>
                </div>
            </div>
            <div className="modal fade" data-bs-backdrop="static" data-bs-keyboard="false" id="modalWait" aria-hidden="true">
                <div className="modal-dialog  modal-dialog-scrollable"
                    aria-hidden="true" tabindex="-1">
                    <div className="modal-content">
                        <div className="modal-header">
                            <a type="button" className="btn-close" href={"/"} > </a>
                        </div>
                        <div className="modal-body">
                            <div className="amount-body">
                                <h3>Wait for transaction...</h3>
                                <div className="modal-body"></div>
                                <div style={(transactionHash !== undefined) ? {} : { display: 'none' }}
                                    onClick={() => window.location.href = `https://rinkeby.etherscan.io/tx/${transactionHash}`}>
                                    <a href="#!" style={{ cursor: "pointer" }}><h4 >Check your transaction</h4></a></div>
                                <div className="mb-3"></div>
                                <div className="mb-3"></div>
                            </div>
                        </div>
                        <div className="modal-footer amount-btn">
                            <div className="mb-4"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Buy;