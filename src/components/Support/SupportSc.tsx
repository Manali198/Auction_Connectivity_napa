import React , {useState} from 'react';
import styles from './SupportSc.module.scss';
import Footer from '../Footer/Footer';
import Container from '../../Layout/Container/Container';
import Image from 'next/image';
import Link from 'next/link';
import Input from '../Input/Input';

export default function SupportSc() {
  const [active, setActive] = React.useState(false);
  const handleClick = () => {
    setActive(!active);
  };

  const [name, setName] = useState('');
  const [namesec, setNamesec] = useState('');
  return (
    <>
    <div
      className={styles.WidthFull}
    >
      <Container
        className={`${styles.napaLoungeContainer} asinnerContainer`}
      >
        <div className={styles.MainContact}
        // className={
        //   active
        //     ? `${styles.MainContact} ${styles.active}`
        //     : `${styles.MainContact}`
        // }
        >
          <div className={styles.MainTextHelp}>
            <div className={styles.StaylinkFrst}>
              <Link href="/help-center"><a> <Image src="/img/arrow_icon.svg" alt="" width="30px" height="16px"/>Back</a></Link>
            </div>
            <h1>Support</h1>
            <div className={styles.ContactUsMain}>
              <div className={styles.LeftContact}>
                <div className={styles.InputContact}>
                <div className={styles.FrstInput}>
                      <Input
                          value={name}
                          type="text"
                          placeholder="Enter Name"
                          label="Name"
                          onChange={(e) => setName(e.target.value)}
                      />
                  </div>
                  <div className={styles.FrstInput}>
                      <Input
                          value={namesec}
                          type="text"
                          placeholder="Enter E-mail"
                          label="Email"
                          onChange={(e) => setNamesec(e.target.value)}
                      />
                  </div>
                  <div className={styles.TextArea}>
                    <p>Describe Your Problem</p> 
                    <textarea></textarea>
                  </div>
                  <div className={styles.SendBtnn}>
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Send</button>
                    <div className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content modal-contentv2">
                          <div className="modal-header">
                            <img src='img/popup_icon.png'width={120} height={120} alt=''/>
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Thank for your message!</h1>
                            <p className='ptag'>You will be contacted shortly.</p>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                          </div>
                          {/* <div className="modal-body">
                            ...
                          </div> */}
                          {/* <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
             
              <div className={
                  active
                    ? `${styles.ChatBtnFix} ${styles.active}`
                    : `${styles.ChatBtnFix}`}
                  >
                <button onClick={handleClick} className={styles.ChatBtn}>
                  <Image src="/img/chat_ic.svg" alt="" width={32} height={32}  />
                </button>
                <div
              className={
                active
                  ? `${styles.ChatBoxMainpstn} ${styles.active}`
                  : `${styles.ChatBoxMainpstn}`
              }>
                <div className={styles.ChatBoxMain}>
                  <div className={styles.ChatBox}>
                    <div className={styles.ChatHad}>
                      <h6>Chat</h6>
                      <div className={styles.MinusPlusBtnn}>
                        <button className={styles.Minus_icon}><Image src="/img/minus_chat.svg" alt="" width={24} height={24} /></button>
                        <button onClick={handleClick}><Image src="/img/plus_chat.svg" alt="" width={24} height={24} /></button>
                      </div>
                    </div>
                    <div>                      
                      <div className={styles.ChatInText}>
                        <div className={styles.ChatFrstImgMain}>
                          <Image src="/img/chat_ic_girl.svg" alt="" width={32} height={32} />
                          <div className={styles.ChatTxtOne}>
                            <h6>Hello! Please describe your problem.</h6>
                            <span>12:24</span>
                          </div>
                        </div>
                        <div className={styles.ChatTxtRight}>
                            <h6>Supported neglected met therefore unwilling discovery remainderbe do mutual.</h6>
                            <span>12:32</span>
                        </div>
                        <div className={styles.ChatFrstImgMain}>
                          <Image src="/img/chat_ic_girl.svg" alt="" width={32} height={32} />
                          <div className={styles.ChatTxtOne}>
                            <h6>Wished be do mutual except in effect answer.</h6>
                            <span>12:38</span>
                          </div>                    
                        </div>
                        <div className={styles.ChatTxtRight}>
                            <h6>Way sentiments two indulgence uncommonly own.</h6>
                            <span>12:32</span>
                        </div>
                        <div className={styles.ChatFrstImgMain}>
                          <Image src="/img/chat_ic_girl.svg" alt="" width={32} height={32} />
                          <div className={styles.ChatTxtOne}>
                            <h6>Wished be do mutual except in effect answer.</h6>
                            <span>12:38</span>
                          </div>                    
                        </div>
                        <div className={styles.ChatTxtRight}>
                            <h6>Way sentiments two indulgence uncommonly own.</h6>
                            <span>12:32</span>
                        </div>
                        <div className={styles.ChatFrstImgMain}>
                          <Image src="/img/chat_ic_girl.svg" alt="" width={32} height={32} />
                          <div className={styles.ChatTxtOne}>
                            <h6>Wished be do mutual except in effect answer.</h6>
                            <span>12:38</span>
                          </div>                    
                        </div>
                        <div className={styles.ChatTxtRight}>
                            <h6>Way sentiments two indulgence uncommonly own.</h6>
                            <span>12:32</span>
                        </div>
                        <div className={styles.ChatFrstImgMain}>
                          <Image src="/img/chat_ic_girl.svg" alt="" width={32} height={32} />
                          <div className={styles.ChatTxtOne}>
                            <h6>Wished be do mutual except in effect answer.</h6>
                            <span>12:38</span>
                          </div>                    
                        </div>
                        <div className={styles.ChatTxtRight}>
                            <h6>Way sentiments two indulgence uncommonly own.</h6>
                            <span>12:32</span>
                        </div>
                        <div className={styles.ChatFrstImgMain}>
                          <Image src="/img/chat_ic_girl.svg" alt="" width={32} height={32} />
                          <div className={styles.ChatTxtOne}>
                            <h6>Wished be do mutual except in effect answer.</h6>
                            <span>12:38</span>
                          </div>                    
                        </div>
                        <div className={styles.ChatTxtRight}>
                            <h6>Way sentiments two indulgence uncommonly own.</h6>
                            <span>12:32</span>
                        </div>
                        <div className={styles.ChatFrstImgMain}>
                          <Image src="/img/chat_ic_girl.svg" alt="" width={32} height={32} />
                          <div className={styles.ChatTxtOne}>
                            <h6>Wished be do mutual except in effect answer.</h6>
                            <span>12:38</span>
                          </div>                    
                        </div>
                        <div className={styles.ChatTxtRight}>
                            <h6>Way sentiments two indulgence uncommonly own.</h6>
                            <span>12:32</span>
                        </div>
                        <div className={styles.ChatFrstImgMain}>
                          <Image src="/img/chat_ic_girl.svg" alt="" width={32} height={32} />
                          <div className={styles.ChatTxtOne}>
                            <h6>Wished be do mutual except in effect answer.</h6>
                            <span>12:38</span>
                          </div>                    
                        </div>
                        <div className={styles.ChatTxtRight}>
                            <h6>Way sentiments two indulgence uncommonly own.</h6>
                            <span>12:32</span>
                        </div>
                        <div className={styles.ChatFrstImgMain}>
                          <Image src="/img/chat_ic_girl.svg" alt="" width={32} height={32} />
                          <div className={styles.ChatTxtOne}>
                            <h6>Wished be do mutual except in effect answer.</h6>
                            <span>12:38</span>
                          </div>                    
                        </div>
                        <div className={styles.ChatTxtRight}>
                            <h6>Way sentiments two indulgence uncommonly own.</h6>
                            <span>12:32</span>
                        </div>
                        <div className={styles.ChatFrstImgMain}>
                          <Image src="/img/chat_ic_girl.svg" alt="" width={32} height={32} />
                          <div className={styles.ChatTxtOne}>
                            <h6>Wished be do mutual except in effect answer.</h6>
                            <span>12:38</span>
                          </div>                    
                        </div>
                        <div className={styles.ChatTxtRight}>
                            <h6>Way sentiments two indulgence uncommonly own.</h6>
                            <span>12:32</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.LastMessageInpt}>
                    <input type="text" placeholder="Message.." />
                    <button >Send</button>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className={styles.footerContainer}>
        <Footer footerIconShow={false} />
      </div>
    </div>
    </>
  )
}
