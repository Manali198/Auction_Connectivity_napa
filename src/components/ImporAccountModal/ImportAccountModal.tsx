import { NextPage } from 'next';
import React, { useState } from 'react';
import { EyeIcon } from '../assets';
import Input from '../Input/Input';
import styles from './ImportAccountModal.module.scss';

type ImportAccountModalProps = {
  open: boolean;
  onClick: () => {};
  setopen: any;
};

const ImportAccountModal: NextPage<ImportAccountModalProps> = ({
  open,
  onClick,
  setopen,
}) => {
  const [address, setAddress] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [showKey, setShowKey] = useState(false);
  return open ? (
    <div className={styles.modalContainer}>
      <div className={styles.innerContainer}>
        <div onClick={() => setopen(false)} className={styles.cross}>
          x
        </div>
        <div className={styles.header}>
          <h1>Import Account</h1>
          <div>
            <Input
              type="text"
              placeholder="0x9324415c4aBe898eFca6cBb0febd9f"
              label="Account Address"
              value={address}
              onChange={(e: any) => setAddress(e.target.value)}
            />
            <div className={styles.pvtKeyContainer}>
              <Input
                type={showKey ? 'text' : 'password'}
                placeholder="18"
                label="Enter your private key string here"
                value={privateKey}
                onChange={(e: any) => setPrivateKey(e.target.value)}
              />
              <img
                onClick={() => setShowKey(!showKey)}
                className={styles.eyeBtn}
                src={EyeIcon}
                alt=""
              />
            </div>
          </div>
        </div>
        <button onClick={onClick} className={styles.imprtbtn}>
          Import
        </button>
      </div>
    </div>
  ) : null;
};

export default ImportAccountModal;