import WalletComponent from '../components/Wallet/Wallet';
import type { NextPage } from 'next';
import Head from 'next/head';
import useWebThree from '../hooks/useWebThree';

const Wallet: NextPage = () => {
  const { account } = useWebThree();

  return (
    <>
      <Head>
        <title>NAPA Society | Wallet</title>
        <meta name="description" content="NAPA Developmeent Environment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WalletComponent account={account} />
    </>
  );
};

export default Wallet;
