import type { NextPage } from 'next';
import styles from './Steper.module.scss';

type SteperProps = {
  steps: number;
  bottom?: number;
  top?: number;
};

const Steper: NextPage<SteperProps> = ({ steps, top, bottom }) => {
  return (
    <div className={styles.container}>
      <div className={styles.topText}>
        <span>0{steps}</span>
      </div>
      <div className={styles.steper}>
        {steps === 1 && (
          <span
            className={styles.stepActive}
            style={{ top: `${top}rem` }}
          ></span>
        )}
        {steps === 2 && (
          <span
            className={styles.stepActive}
            style={{ top: `${top}rem` }}
          ></span>
        )}
        {steps === 3 && (
          <span
            className={styles.stepActive}
            style={{ top: `${top}rem` }}
          ></span>
        )}
        {steps === 4 && (
          <span
            className={styles.stepActive}
            style={{ bottom: `${bottom}rem` }}
          ></span>
        )}
      </div>
      <div className={styles.bottomText}>
        <span>04</span>
      </div>
    </div>
  );
};

export default Steper;
