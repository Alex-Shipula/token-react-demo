import { useEffect } from 'react'
import { useWalletModal, useWalletProvider, WalletProvider } from '../../srcWallet/index.ts';
import useWallet from '../../srcWallet/contexts/hooks/useWallet';
import wallets from '../../srcWallet/config/walletsConfig';
import styles from "./AppWallet.module.css";

const isMobile = /Mobile|webOS|BlackBerry|IEMobile|MeeGo|mini|Fennec|Windows Phone|Android|iP(ad|od|hone)/i.test( navigator.userAgent );

function App() {
	const login = useWallet();

	const { setOpen, deactivate, error: walletError } = useWalletModal();
	const { account, connected } = useWalletProvider();
	useEffect( () => {
		console.log( connected );
		console.log( account );
	}, [connected, account, walletError] )

	return (
		<div>
			<div className={styles.wrapperButtons}>
				<button className={styles.walletButton} onClick={() => connected ? deactivate() : isMobile ? login(wallets[0].connector) : setOpen( true )}>{(connected) ? 'Disconnect' : 'Connect'}</button>
				<br />
			</div>
		</div >
	);
}
export default function AppWallet() {
	return (
		<WalletProvider>
			<App />
		</WalletProvider>
	)
}