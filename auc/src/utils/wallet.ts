import Web3 from 'web3';
const crypt = require("crypto");

declare global {
  interface Window {
    ethereum: any;
    web3: any;
  }
}

export const getWeb3 = async () => {
  return new Promise(async (resolve, reject) => {
    const web3 = new Web3(window.ethereum);
    try {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      resolve(web3);
    } catch (error) {
      reject(error);
    }
  });
};

export const getAlreadyConnectedWeb3 = async () => {
  return new Promise(async (resolve, reject) => {
    try {
      let web3: any;
      if (window.ethereum) {
        web3 = new Web3(window.ethereum);
      } else if (window.web3) {
        web3 = new Web3(window.web3.currentProvider);
      }
      resolve(web3);
    } catch (error) {
      reject(error);
    }
  });
};

export const getChainId = (chainId: string) => {
  if (chainId == '0x1') {
    return '0';
  } else if (chainId == '0x5') {
    return '1';
  } else if (chainId == '0xaa36a7') {
    return '2';
  } else if (chainId == '0x89') {
    return '5';
  } else if (chainId == '0x13881') {
    return '6';
  } else return '0';
};

export const decryptString = (ciphertext: string) => {
  const decipher = crypt.createDecipher("aes-256-cbc", 'secret key');
  let decrypted = decipher.update(ciphertext, "hex", "utf8");
  decrypted += decipher.final("utf8");
  return decrypted;
};
