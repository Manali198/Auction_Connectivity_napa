import Web3Modal from 'web3modal';
import { ethers } from 'ethers';
import { providerOptions } from './providerOptions';
import { toast } from 'react-toastify';
import { CustomToastWithLink } from '@/components/CustomToast/CustomToast';
import { DoneIcon, ErrorIcon } from '@/components/assets';
import { ToastDescription, ToastTitle } from '@/typing/toast';

export const connectWalletModal = async () => {
  console.log('Modal called');
  let provider;
  let library;
  let accounts;
  let network;
  try {
    const web3Modal = new Web3Modal({
      network: 'mainnet', // optional
      cacheProvider: true, // optional
      providerOptions, // required
    });
    provider = await web3Modal.connect();
    library = new ethers.providers.Web3Provider(provider);
    accounts = await library.listAccounts();
    network = await library.getNetwork();
    toast.error(
        CustomToastWithLink({
          icon: DoneIcon,
          title: ToastTitle.WALLET_CONNECTED,
          description: ToastDescription.WALLET_CONNECTED,
          time: 'Now',
        })
      );
  } catch (error) {
    console.error(error);
    toast.error(
      CustomToastWithLink({
        icon: ErrorIcon,
        title: 'Error',
        description: error.message,
        time: 'Now',
      })
    );
  }
  return { provider, library, accounts, network };
};
