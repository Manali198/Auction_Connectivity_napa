import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loadingContainerN}>
      <div className={styles.loaderN}></div>
      <br/>
      <span className={styles.loadingText}>Just a sec...</span>
    </div>
  );
};

export default Loading;
