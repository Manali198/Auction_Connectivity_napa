import React from 'react';
import { useState } from 'react';

import Image from 'next/image';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './CreateNewPoolThree.module.scss';
import Link from 'next/link';
import Input from '../Input/Input';


export default function CreateNewPoolThree() {
  const [name, setName] = useState('');
   
  return (
    <>
        <div className={styles.InviteBoxprnt}>
            <p className={styles.Invitep}>Invite Participants to your Pool</p>
            <div className={styles.InviteiputBox}>
                {/* <p className={styles.InviteiputEmail}>Email</p> */}
                <div className={styles.Inviteiputlink}>
                    {/* <input placeholder='patrick.dawson@gmail.com' type="email" /> */}
                    <Input
                        value={name}
                        type="Email"
                        placeholder="patrick.dawson@gmail.com"
                        label="Email"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <button>Send Invite</button>
                </div>
            </div>
            <div className={styles.BtmPartBox}>
                <div className={styles.BtmPartBtnm}>
                    <div className={styles.BtmImgPbox}>
                        <Image
                            src="/img/gimel_ic_01.png"
                            alt=""
                            width="40px"
                            height="40px"
                        />
                        <p>dorothy.mccoy@gmail.com</p>
                    </div>
                        <button className={styles.lftscroBtm}>
                            <Image
                                src="/img/shape_cors_ic.png"
                                alt=""
                                width="16px"
                                height="16px"
                            />
                        </button>                        
                </div>
                <div className={styles.BtmPartBtnm}>
                    <div className={styles.BtmImgPbox}>
                        <Image
                            src="/img/gimel_ic_02.png"
                            alt=""
                            width="40px"
                            height="40px"
                        />
                        <p>marta.thornton@gmail.com</p>
                    </div>
                        <button className={styles.lftscroBtm}>
                            <Image
                                src="/img/shape_cors_ic.png"
                                alt=""
                                width="16px"
                                height="16px"
                            />
                        </button>                        
                </div>
                <div className={styles.BtmPartBtnm}>
                    <div className={styles.BtmImgPbox}>
                        <Image
                            src="/img/gimel_ic_03.png"
                            alt=""
                            width="40px"
                            height="40px"
                        />
                        <p>catherine.patton@gmail.com</p>
                    </div>
                        <button className={styles.lftscroBtm}>
                            <Image
                                src="/img/shape_cors_ic.png"
                                alt=""
                                width="16px"
                                height="16px"
                            />
                        </button>                        
                </div>
                <div className={styles.BtmPartBtnm}>
                    <div className={styles.BtmImgPbox}>
                        <Image
                            src="/img/gimel_ic_04.png"
                            alt=""
                            width="40px"
                            height="40px"
                        />
                        <p>howard.copeland@gmail.com</p>
                    </div>
                        <button className={styles.lftscroBtm}>
                            <Image
                                src="/img/shape_cors_ic.png"
                                alt=""
                                width="16px"
                                height="16px"
                            />
                        </button>                        
                </div>
                <div className={styles.BtmPartBtnm}>
                    <div className={styles.BtmImgPbox}>
                        <Image
                            src="/img/gimel_ic_05.png"
                            alt=""
                            width="40px"
                            height="40px"
                        />
                        <p>rufus.flores@gmail.com</p>
                    </div>
                        <button className={styles.lftscroBtm}>
                            <Image
                                src="/img/shape_cors_ic.png"
                                alt=""
                                width="16px"
                                height="16px"
                            />
                        </button>                        
                </div>
                <div className={styles.BtmPartBtnm}>
                    <div className={styles.BtmImgPbox}>
                        <Image
                            src="/img/gimel_ic_06.png"
                            alt=""
                            width="40px"
                            height="40px"
                        />
                        <p>tom.bradley@gmail.com</p>
                    </div>
                        <button className={styles.lftscroBtm}>
                            <Image
                                src="/img/shape_cors_ic.png"
                                alt=""
                                width="16px"
                                height="16px"
                            />
                        </button>                        
                </div>
                <div className={styles.BtmPartBtnm}>
                    <div className={styles.BtmImgPbox}>
                        <Image
                            src="/img/gimel_ic_07.png"
                            alt=""
                            width="40px"
                            height="40px"
                        />
                        <p>patricia.rose@gmail.com</p>
                    </div>
                        <button className={styles.lftscroBtm}>
                            <Image
                                src="/img/shape_cors_ic.png"
                                alt=""
                                width="16px"
                                height="16px"
                            />
                        </button>                        
                </div>
                <div className={styles.BtmPartBtnm}>
                    <div className={styles.BtmImgPbox}>
                        <Image
                            src="/img/gimel_ic_08.png"
                            alt=""
                            width="40px"
                            height="40px"
                        />
                        <p>gerardo.swanson@gmail.com</p>
                    </div>
                        <button className={styles.lftscroBtm}>
                            <Image
                                src="/img/shape_cors_ic.png"
                                alt=""
                                width="16px"
                                height="16px"
                            />
                        </button>                        
                </div>
                <div className={styles.CreatePool}>
                    <Link href="/pool-details"><a>Create Pool</a></Link>
                </div>
            </div>
        </div>
    </>
  )
}
