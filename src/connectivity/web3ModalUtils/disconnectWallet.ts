import { ErrorIcon } from '@/components/assets';
import { CustomToastWithLink } from '@/components/CustomToast/CustomToast';
import { ToastDescription, ToastTitle } from '@/typing/toast';
import { deleteCookie } from 'cookies-next';
import { toast } from 'react-toastify';
import Web3Modal from 'web3modal';
import { providerOptions } from './providerOptions';

export const disconnect = async () => {
  const web3Modal = new Web3Modal({
    providerOptions, // required
  });
  await web3Modal.clearCachedProvider();
  deleteCookie('napaWalletAccount')
  deleteCookie('metaMaskAccount')
  toast.error(
    CustomToastWithLink({
      icon: ErrorIcon,
      title: ToastTitle.WALLET_DISCONNECTED,
      description: ToastDescription.WALLET_DISCONNECTED,
      time: 'Now',
    })
  );
};
