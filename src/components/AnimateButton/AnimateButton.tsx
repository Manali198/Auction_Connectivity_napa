import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './AnimateButton.module.scss';

import { RightArrowBlueIcon } from '../assets';

type AnimateButtonProps = {
  title: string;
  onClick: () => void;
};

const AnimateButton: NextPage<AnimateButtonProps> = ({ title, onClick }) => {
  return (
    <div onClick={onClick} className={styles.joinSociety}>
      <a className={styles.joinSocietyBtn} href="javascript:void(0);">
        {title}
      </a>
      <Image src={RightArrowBlueIcon} alt="arrow" width={40} height={40} />
    </div>
  );
};

export default AnimateButton;
