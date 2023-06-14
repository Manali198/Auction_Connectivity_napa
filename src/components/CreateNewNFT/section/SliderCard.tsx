import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './SliderCard.module.scss';


type Props = {
  backgroundImage?: string;
};

const SliderCard: NextPage<Props> = ({  }) => {
  return (
    <div
    
    >
      <div className={styles.TipsTulsOverlay}>
            <div className={styles.boxinnrcont}>
                <div >
                    <div className={`${styles.apernt} `}>
                        <Image
                            src="/img/feeg_grid_img01.png"
                            height="372px"
                            width="282px"
                            alt=""
                            className="evmtimg"
                        />
                        <div className={styles.downCont}>
                            <h3>Mysterious Space  Squares</h3>
                            <div className={styles.flexPernt}>
                                <div className={styles.currentBit}>
                                    <h5>Current Bid</h5>
                                    <div className={styles.txtimgFlex}>
                                        <Image
                                            src="/img/napa_ic.svg"
                                            height="24px"
                                            width="24px"
                                            alt=""
                                            className=""
                                        />
                                        <p>0.36 ETH</p>
                                    </div>
                                </div>
                                <div className={styles.endingIn}>
                                    <p>Ending In</p>
                                    <h3>1h 45 min</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default SliderCard;
