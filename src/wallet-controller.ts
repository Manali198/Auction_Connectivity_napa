import { getCookie } from 'cookies-next';
import { getNapaAccounts } from './services/napaAccounts';

const getActiveAccount = async () => {
    let activeAccount:any
  const napaWalletAccountFromCookie = getCookie('napaWalletAccount');
//   @ts-ignore
  const { data }: any = await getNapaAccounts(napaWalletAccountFromCookie ? JSON.parse(napaWalletAccountFromCookie)?.profileId : '');
  if(data?.data)
  {
    activeAccount = data?.data?.find(
        (a: any) => a.isActive == 'true'
      ); 
  }
  const metaMaskAccountFromCookie = getCookie('metaMaskAccount');
  return activeAccount
    ? activeAccount
    : metaMaskAccountFromCookie
    ? metaMaskAccountFromCookie
    : 'Not Connected';
};

export { getActiveAccount };
