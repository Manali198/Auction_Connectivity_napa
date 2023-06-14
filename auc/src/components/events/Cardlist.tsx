import Link from 'next/link';
import React from 'react'
import styles from './Events.module.scss';
import Image from 'next/image';

export default function Cardlist() {
  return (
    <div className={styles.CardlistPrntBx}>
        <Link href="events-details" className={styles.CardlistPrntBxLink}>
            <a className={`${styles.CardlistABx} hovereffect`}>
                <Image src='/img/event_list_img_01.png' width={282} height={372} alt="" className='evmtimg'/>
                <div className={styles.CardBxTopconten}>
                  <Image src='/img/location_icon_evnt.svg' width={20} height={20} alt="" />
                  <h2>250 Gerrard Street, Toronto</h2>
                </div>
                <div className={styles.CardBxBotconten}>
                  <p>Annual Meetingof the NTF Community</p>
                  <h3>Aug 29, 17:00</h3>
                </div>
            </a>            
        </Link>              
    </div>    
  )
}
