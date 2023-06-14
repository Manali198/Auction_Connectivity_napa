import React from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import SectionOne from './section/SectionOne';
import SectionTow from './section/SectionTow';
import SectionThreeTbl from './section/SectionThreeTbl';
import SectionFourTbl from './section/SectionFourTbl';
import SectionFiveSlider from './section/SectionFiveSlider';
import styles from './CreateNewNFTTow.module.scss';

export default function CreateNewNFTTow() {
  return (
    <>
        <div className={styles.CreateNewnftTowW}>
            <SectionOne />
            <SectionTow />
            <SectionThreeTbl />
            <SectionFourTbl />
            <SectionFiveSlider />
        </div>            
    </>
  )
}


