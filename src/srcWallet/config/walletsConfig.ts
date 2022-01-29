import MetamaskIco from "../assets/icons/metamask.svg";
import WalletConnectIco from "../assets/icons/walletconnect.svg";
import { Connectors } from "./types";

const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test(navigator.userAgent);

let wallets = (isMobile) ? [
    {
        title: "Wallet Connect",
        image: WalletConnectIco,
        connector: Connectors.WALLET_CONNECT,
    }]
    : [
        {
            title: "MetaMask",
            image: MetamaskIco,
            connector: Connectors.INJECTED
        },
        {
            title: "Wallet Connect",
            image: WalletConnectIco,
            connector: Connectors.WALLET_CONNECT,
        }
    ];

export default wallets;