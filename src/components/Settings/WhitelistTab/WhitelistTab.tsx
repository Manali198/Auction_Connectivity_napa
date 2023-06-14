import React from 'react';
import { PlusIcon } from '../../../components/assets';
import type { NextPage } from 'next';
import Image from 'next/image';
import { useState } from 'react';
import styles from '../Settings.module.scss';
import WhiteListComponent from '../WhiteListComponent/WhiteListComponent';
import { currencies } from '../../../constants/settings.constants';
import DropDownComponent from '../../Dropdown/Dropdown';
import Input from '../../Input/Input';
import { Button } from 'react-bootstrap';

const WhitelistTab: NextPage = () => {
  const [toggleSwitch, setToggleSwitch] = useState(false);
  const [currency, setCurrency] = useState('NAPA');

  const [namesix, setNamesix] = useState('');
  const [active, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className={`row col-12 ${styles.whitelistContainer}`}>
      <div className={styles.whitelistHeader}>
        <div className={styles.whitelistLeftSide}>
          <label className={styles.switch}>
            <input
              type="checkbox"
              onChange={(e) => setToggleSwitch(e.target.checked)}
            />
            <span className={`${styles.slider} ${styles.round}`}></span>
          </label>
          <span className={styles.enableWhitelist}>Enable Whitelist</span>
        </div>
        <div className={`${styles.whitelistRightSide}`} onClick={handleClick}>
          <Image src={PlusIcon} width={20} height={20} alt="plus" />
          <span>Add New</span>
        </div>
      </div>
      {toggleSwitch && (
        <div className={styles.whitelistContent}>
          <WhiteListComponent />
        </div>
      )}
      <div
        className={
          active
            ? `${styles.NewAddressBoxMin} ${styles.Active}`
            : `${styles.NewAddressBoxMin}`
        }
      >
        <div className={styles.NewAddressBox}>
          <div className={styles.NewAddreBtnSpbt}>
            <h3>New Address</h3>
            <Image
              alt=""
              src="/img/project_cret_ic.png"
              onClick={handleClick}
              width={32}
              height={32}
            />
          </div>

          <DropDownComponent
            title="Currency"
            options={currencies}
            dropDownValue={currency}
            onChange={(e) => setCurrency(e.target.value)}
          />
          <div className="GeneralInputBox">
            <div className="FrstInput">
              <Input
                value={namesix}
                type="text"
                placeholder="General ETH Wallet"
                label="Name"
                onChange={(e) => setNamesix(e.target.value)}
              />
            </div>
          </div>
          <div className="GeneralInputBox">
            <div className="FrstInput">
              <Input
                value={namesix}
                type="text"
                placeholder="Hy6kI98oLlKnF5Rt80PaLw29j8TY5rVe0"
                label="Address"
                onChange={(e) => setNamesix(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className={styles.NewAddrBtnCnlSve}>
          <Button className={styles.Cancel} onClick={handleClick}>
            Cancel
          </Button>
          <Button className={styles.Save}>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default WhitelistTab;
