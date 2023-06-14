import type { NextPage } from 'next';
import styles from './Tab.module.scss';

type TabProps = {
  title: string;
  setTab: (tab: string) => void;
  tab: string;
  value: string;
};

const Tab: NextPage<TabProps> = ({ title, setTab, tab, value }) => {
  return (
    <li>
      <button
        type="submit"
        className={`${styles.tabBtn} ${tab == value && styles.active}`}
        onClick={() => setTab(value)}
      >
        {title}
      </button>
    </li>
  );
};

export default Tab;
