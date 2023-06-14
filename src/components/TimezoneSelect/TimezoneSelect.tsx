import type { NextPage } from 'next';
import TimezoneSelect from 'react-timezone-select';
import { ArrowDownIcon } from '../assets';
import styles from './TimezoneSelect.module.scss';

type TimezoneProps = {
  value: string;
  onChange: any;
};

const Timezone: NextPage<TimezoneProps> = ({ value, onChange }) => {
  return (
    <div className={styles.selectWrapper}>
      <span className={styles.title}>Your Timezone</span>
      <TimezoneSelect value={value} onChange={onChange} />
      <div className={styles.svg}>
        <img src={ArrowDownIcon} alt="" />
      </div>
    </div>
  );
};

export default Timezone;
