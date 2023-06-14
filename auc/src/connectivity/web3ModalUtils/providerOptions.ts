// import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
// import WalletConnect from "@walletconnect/web3-provider";
import { binanceWallet } from '../../components/assets/'

export const providerOptions = {
    "custom-binancechainwallet": {
        display: {
            logo: binanceWallet,
            name: "Binance Chain Wallet",
            description: "Connect to your Binance Chain Wallet"
        },
        package: true,
        connector: async () => {
            let provider = null;
            if (typeof window.BinanceChain !== 'undefined') {
                provider = window.BinanceChain;
                try {
                    await provider.request({ method: 'eth_requestAccounts' })
                } catch (error) {
                    throw new Error("User Rejected");
                }
            } else {
                throw new Error("No Binance Chain Wallet found");
            }
            return provider;
        }
    },
    // coinbasewallet: {
    //     package: CoinbaseWalletSDK,
    //     options: {
    //         appName: "Web 3 Modal Demo",
    //         infuraId: "05c2e63bed9e4ac586a01684dcc4a87c"
    //     }
    // },
    // walletconnect: {
    //     package: WalletConnect,
    //     options: {
    //         infuraId: "05c2e63bed9e4ac586a01684dcc4a87c"
    //     }
    // }
};