import React from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './LiveStreamBanner.module.scss';
import Image from 'next/image';

export default function LiveStreamBannner() {
  return (
    <>
      <div className={styles.LiveStreamMain}>
        <div className={styles.LeftLiveStreamPad}>
          <h1 className={styles.LiveStreamPadDeflt}>NAPA Livestream</h1>
          <p>
            Abilities or he perfectly pretended so strangers be exquisite. Oh to
            another chamber pleased imagine do in. Went me rank at last loud
            shot an draw.
          </p>
        </div>
        <div className={styles.RightPlayBtn}>
          <Image
            src="/assets/images/play_button.png"
            alt=""
            width={340}
            height={340}
          />
        </div>
      </div>
    </>
  );
}
