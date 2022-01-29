//components
import { useState, useEffect } from "react"
import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header/Header"
import Metamask from "../../components/Metamask/Metamask";
import './Settings.css'
//images
import my_profile_logor from "../../img/ava-box-image.png"
import { settingsURL, hostURL } from "../../constants/URLs"
const axios = require('axios');
const metamask = new Metamask();
const urlSettingsPurse = 'settingspurse';

let arrUsers = [];
let objUser = {};
async function getSettingsUsers() {
    try {
        axios.get(settingsURL).then((resp) => {
            arrUsers = resp.data;
        });
    } catch (error) {
        console.error(error)
    }
    console.log(arrUsers);
}

async function getSettings() {
    try {
        axios.get(settingsURL + "/" + localStorage.getItem('userID')).then((resp) => {
            objUser.UserID = resp.data.UserID;
            objUser.UserImage = resp.data.UserImage;
            objUser.Email = resp.data.Email;
            objUser.Phone = resp.data.Phone;
        });
    } catch (error) {
        console.error(error)
    }
}

async function putSettings(phone, email, username, account) {
    try {
        let putParams = {
            Phone: phone,
            Email: email,
            UserName: username,
            PurseMetaUser: account
        };
        if ((putParams.UserName.length >= 4) && (putParams.UserName.length <= 10) &&
            (putParams.Email.length >= 5) && (putParams.PurseMetaUser !== "No connection Metamask")) {
            console.log(putParams);
            axios.post(`${hostURL}/${urlSettingsPurse}`, putParams).then((resp) => {
                console.log(resp);
            })
        };
    } catch (error) {
        console.error(error)
    }
}

const Settings = () => {
    const [phone, setPhone] = useState("+");
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [account, setAccount] = useState("No connection Metamask");
    const [metamaskIsTrue] = useState(metamask.isMetaMaskInstalled());

    if (metamaskIsTrue) {
        window.ethereum.on("accountsChanged", () => { setAccount(window.ethereum.selectedAddress) })
    }

    useEffect(() => {
        if (metamaskIsTrue) {
            setAccount(window.ethereum.selectedAddress)
        }
    }, [account, metamaskIsTrue]);

    return (
        <>
            <Header />
            <div className="settings">
                    <div className="container">
                        <div className="settings__title-wrapper">
                            Settings
                            <div className="h2 settings__title">Settings</div>
                        </div>
                        <div className="section-one row">
                            <div className="section-one__left col-lg-8">
                                <div className="phone-number">
                                    <div className="phone-number__title">
                                        Phone notifications
                                    </div>
                                    <input type="phone" className="form-control" name="Phone" id="phone" placeholder="Phone" value={phone}
                                        onChange={() => { setPhone(document.getElementById("phone").value) }} required></input>
                                    <div className="phone-number__under">
                                        Phone Number is for text notifications only. We will keep your number secret.
                                    </div>
                                </div>
                                <div className="mail-number">
                                    <div className="mail-number__title">
                                        email notifications
                                    </div>
                                    <input type="email" className="form-control" name="Email" id="mail" placeholder="E-mail"
                                        onChange={() => { setEmail(document.getElementById("mail").value) }} required></input>
                                </div>
                                <div className="mail-number">
                                    <div className="mail-number__title">
                                        User name
                                    </div>
                                    <input type="text" minlength="4" maxlength="10" className="form-control" placeholder="Name" id="username"
                                        onChange={() => { setUserName(document.getElementById("username").value) }} required></input>
                                </div>
                                <div className="mail-number">
                                    <div className="mail-number__title">
                                        Your purse
                                        <input value={account} className="form-control" placeholder={account}></input>
                                    </div>
                                </div>
                                <div className="accounts">
                                    <div className="accounts__title">
                                        Connected accounts
                                    </div>
                                    <div className="accounts__text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla orci id enim ut. Pulvinar at magna leo at. Porttitor risus vestibulum, nunc, orci non. Amet, quisque vulputate aliquam sed magna pretium lectus sagittis, scelerisque.
                                    </div>
                                    <div className="accounts__buttons">
                                        <a className="green-button" href="https://coindogs.com/" target="blank">
                                            CoinDogs <i className="fas fa-check ml10"></i>
                                        </a>
                                        <div className="delimeter"></div>
                                        <a className="blue-gradient-button" href="https://metamask.io/" target="blank">
                                            Connect Metamask <img className="ml10" src="./img/mdi_google.png" alt=""></img>
                                        </a>
                                    </div>
                                </div>
                                <div className="update-and-cancel">
                                    <button style={{ border: 0 }} className="blue-gradient-button" type="submit"
                                        onClick={() => { putSettings(phone, email, userName, account) }}>
                                        Update my settings <i className="fas fa-paw ml10"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="section-one__right col-lg-4">
                                <div className="section-one__ava-box">
                                    <div className="ava-box__title">
                                        User IMAGE
                                    </div>
                                    <div className="ava-box__image">
                                        <img src={my_profile_logor} alt=""></img>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        </>
    )
};
export default Settings;