import { useEffect } from 'react';
import type { NextPage } from 'next';
import Vivus from 'vivus';
import styles from './Loader.module.scss';

import { NapaLogo, NapaLogoWhite } from '../Svg';

const Loader: NextPage = () => {
  useEffect(() => {
    new Vivus('napa-logo', {
      type: 'delayed',
      duration: 200,
      animTimingFunction: Vivus.EASE_OUT,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.loaderContainer}>
      <div className={styles.svgWrapper}>
        <NapaLogo className={styles.napaLogo} />
      </div>
      <div className={styles.svgWrapper}>
        <NapaLogoWhite className={styles.napaLogoWhite} />
      </div>
    </div>
  );
};

export default Loader;
