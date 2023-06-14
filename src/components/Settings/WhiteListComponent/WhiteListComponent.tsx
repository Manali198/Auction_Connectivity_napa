import React from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { NapaIcon } from '../../assets';
import styles from './WhiteListComponent.module.scss';
import { useState } from 'react';
import DropDownComponent from '../../Dropdown/Dropdown';
import { currencies } from '../../../constants/settings.constants';
import Input from '../../Input/Input';
import { Button } from 'react-bootstrap';
// import {styles} from './Settings.module.scss';

type WhiteListComponentProps = {};

const WhiteListComponent: NextPage<WhiteListComponentProps> = () => {
  const [currency, setCurrency] = useState('NAPA');

  const [namesix, setNamesix] = useState('');
  const [active, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!active);
  };
  return (
    <div className={styles.listContainer}>
      <div className={styles.headerList}>
        <span className={styles.headerListItem}>Currency</span>
        <span className={styles.headerListItem}>Name</span>
        <span className={styles.headerListItem}>Address</span>
      </div>
      <div className={styles.content}>
        {Array.from({ length: 25 }).map((_, index) => {
          return (
            <div key={index} className={styles.listItemContainer}>
              <span className={styles.listItem}>
                <Image src={NapaIcon} alt="NapaIcon" width={24} height={24} />
                <span>NAPA</span>
                <span className={styles.subtitle}>Napa</span>
              </span>
              <span className={styles.listItem}>General NAPA Wallet</span>
              <span className={styles.listItem}>
                Jhdhdj9jHiI3rTyFR5yJklDcV53qWlMn87
              </span>
              <div className={`${styles.listItem} ${styles.moreBtnContainer}`}>
                {/* <Image src={MoreIcon} alt="MoreIcon" width={25} height={25} /> */}
              </div>
              <button
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="true"
                className="two_dot_btn"
              >
                <Image src="/img/dotet_ic.png" alt="" width={24} height={24} />
              </button>
              <ul className="dropdown-menu dropdown-menu-end drpdwn_list drpdwn_list_empty">
                <li>
                  <a onClick={handleClick}>Edit</a>
                </li>
                <li>
                  <a>Delete</a>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div
        className={
          active
            ? `${styles.NewAddressBoxMin} ${styles.Active}`
            : `${styles.NewAddressBoxMin}`
        }
      >
        <div className={styles.NewAddressBox}>
          <div className={styles.NewAddreBtnSpbt}>
            <h3>Edit</h3>
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

export default WhiteListComponent;
