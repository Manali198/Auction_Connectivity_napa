import React from 'react'
import styles from './FAQSc.module.scss';
import Footer from '../Footer/Footer';
import Container from '../../Layout/Container/Container';
import Image from 'next/image';
import Link from 'next/link';


export default function FAQSc() {
  return (
    <>
    <div
      className={styles.WidthFull}
    >
      <Container
        className={`${styles.napaLoungeContainer} asinnerContainer`}
      >
        <div className={styles.MainContact}>
          <div className={styles.MainTextHelp}>
            <div className={styles.StaylinkFrst}>
              <Link href="/help-center"><a> <Image src="/img/arrow_icon.svg" alt="" width="30px" height="16px"/>Back</a></Link>
            </div>
            <h1>FAQ</h1>
            <div className="AccodianFaq">
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button acoordin_btn_ic" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <div className='accodian_img_bx'>
                        <div className="img_plus">
                          <Image src="/img/plus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                        <div className="minus_img">
                          <Image src="/img/minus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                      </div>
                      What is NAPA?
                    </button>
                  </h2>
                  <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body acodian_in_p">
                     <p>This guide explains how to withdraw funds from the NAPA blockchain to the Ethereum mainnet. This withdrawal is a two-stage process that takes up to 4 hours to complete. Make sure you have enough NAPA (on NAPA mainnet) in your wallet to cover withdrawal from the NAPA</p>
                     <p>To get started, navigate to the top right of the NAPA Society website and click the wallet icon. For this tutorial, we{"'"}ll be withdrawing ETH from NAPA (represented by a purple diamond logo).You should see your NAPA wallet dashboard and all current tokens bridged to NAPA. Locate the Ether (NAPA-WETH) token and click Withdraw. You{"'"}ll have to click Continue on three pop-up windows. You will be asked to confirm the transaction fee and acknowledge that the withdrawal process may take up to 4 hours to complete. </p>
                     <p>You{"'"}ll be asked to sign the transaction on wallet.matic.network (seen above on MetaMask). The gas amount should be low. The first part of the withdrawal process will take approximately 45 mins to 1 hour. This will move funds to a checkpoint on the Ethereum network. You can return to the window later on to complete the checkpoint. You will see an {'"'}Action Required{'"'} notification on the top right of the window.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button acoordin_btn_ic" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <div className='accodian_img_bx'>
                        <div className="img_plus">
                          <Image src="/img/plus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                        <div className="minus_img">
                          <Image src="/img/minus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                      </div>
                      How can I contact NAPA?
                    </button>
                  </h2>
                  <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body acodian_in_p">
                      <p>This guide explains how to withdraw funds from the NAPA blockchain to the Ethereum mainnet. This withdrawal is a two-stage process that takes up to 4 hours to complete. Make sure you have enough NAPA (on NAPA mainnet) in your wallet to cover withdrawal from the NAPA</p>
                      <p>To get started, navigate to the top right of the NAPA Society website and click the wallet icon. For this tutorial, we{"'"}ll be withdrawing ETH from NAPA (represented by a purple diamond logo).You should see your NAPA wallet dashboard and all current tokens bridged to NAPA. Locate the Ether (NAPA-WETH) token and click Withdraw. You{"'"}ll have to click Continue on three pop-up windows. You will be asked to confirm the transaction fee and acknowledge that the withdrawal process may take up to 4 hours to complete. </p>
                      <p>You{"'"}ll be asked to sign the transaction on wallet.matic.network (seen above on MetaMask). The gas amount should be low. The first part of the withdrawal process will take approximately 45 mins to 1 hour. This will move funds to a checkpoint on the Ethereum network. You can return to the window later on to complete the checkpoint. You will see an {'"'}Action Required{'"'} notification on the top right of the window.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button acoordin_btn_ic" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <div className='accodian_img_bx'>
                        <div className="img_plus">
                          <Image src="/img/plus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                        <div className="minus_img">
                          <Image src="/img/minus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                      </div>
                      How do I withdraw funds from NAPA?
                    </button>
                  </h2>
                  <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body acodian_in_p">
                      <p>This guide explains how to withdraw funds from the NAPA blockchain to the Ethereum mainnet. This withdrawal is a two-stage process that takes up to 4 hours to complete. Make sure you have enough NAPA (on NAPA mainnet) in your wallet to cover withdrawal from the NAPA</p>
                      <p>To get started, navigate to the top right of the NAPA Society website and click the wallet icon. For this tutorial, we{"'"}ll be withdrawing ETH from NAPA (represented by a purple diamond logo).You should see your NAPA wallet dashboard and all current tokens bridged to NAPA. Locate the Ether (NAPA-WETH) token and click Withdraw. You{"'"}ll have to click Continue on three pop-up windows. You will be asked to confirm the transaction fee and acknowledge that the withdrawal process may take up to 4 hours to complete. </p>
                      <p>You{"'"}ll be asked to sign the transaction on wallet.matic.network (seen above on MetaMask). The gas amount should be low. The first part of the withdrawal process will take approximately 45 mins to 1 hour. This will move funds to a checkpoint on the Ethereum network. You can return to the window later on to complete the checkpoint. You will see an {'"'}Action Required{'"'} notification on the top right of the window.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFour">
                    <button className="accordion-button acoordin_btn_ic" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                      <div className='accodian_img_bx'>
                        <div className="img_plus">
                          <Image src="/img/plus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                        <div className="minus_img">
                          <Image src="/img/minus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                      </div>
                      What are gas fees on Ethereum?
                    </button>
                  </h2>
                  <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div className="accordion-body acodian_in_p">
                      <p>This guide explains how to withdraw funds from the NAPA blockchain to the Ethereum mainnet. This withdrawal is a two-stage process that takes up to 4 hours to complete. Make sure you have enough NAPA (on NAPA mainnet) in your wallet to cover withdrawal from the NAPA</p>
                      <p>To get started, navigate to the top right of the NAPA Society website and click the wallet icon. For this tutorial, we{"'"}ll be withdrawing ETH from NAPA (represented by a purple diamond logo).You should see your NAPA wallet dashboard and all current tokens bridged to NAPA. Locate the Ether (NAPA-WETH) token and click Withdraw. You{"'"}ll have to click Continue on three pop-up windows. You will be asked to confirm the transaction fee and acknowledge that the withdrawal process may take up to 4 hours to complete. </p>
                      <p>You{"'"}ll be asked to sign the transaction on wallet.matic.network (seen above on MetaMask). The gas amount should be low. The first part of the withdrawal process will take approximately 45 mins to 1 hour. This will move funds to a checkpoint on the Ethereum network. You can return to the window later on to complete the checkpoint. You will see an {'"'}Action Required{'"'} notification on the top right of the window.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingFive">
                    <button className="accordion-button acoordin_btn_ic" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
                      <div className='accodian_img_bx'>
                        <div className="img_plus">
                          <Image src="/img/plus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                        <div className="minus_img">
                          <Image src="/img/minus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                      </div>
                      Where can I find NFT sales records?
                    </button>
                  </h2>
                  <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
                    <div className="accordion-body acodian_in_p">
                      <p>This guide explains how to withdraw funds from the NAPA blockchain to the Ethereum mainnet. This withdrawal is a two-stage process that takes up to 4 hours to complete. Make sure you have enough NAPA (on NAPA mainnet) in your wallet to cover withdrawal from the NAPA</p>
                      <p>To get started, navigate to the top right of the NAPA Society website and click the wallet icon. For this tutorial, we{"'"}ll be withdrawing ETH from NAPA (represented by a purple diamond logo).You should see your NAPA wallet dashboard and all current tokens bridged to NAPA. Locate the Ether (NAPA-WETH) token and click Withdraw. You{"'"}ll have to click Continue on three pop-up windows. You will be asked to confirm the transaction fee and acknowledge that the withdrawal process may take up to 4 hours to complete. </p>
                      <p>You{"'"}ll be asked to sign the transaction on wallet.matic.network (seen above on MetaMask). The gas amount should be low. The first part of the withdrawal process will take approximately 45 mins to 1 hour. This will move funds to a checkpoint on the Ethereum network. You can return to the window later on to complete the checkpoint. You will see an {'"'}Action Required{'"'} notification on the top right of the window.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSix">
                    <button className="accordion-button acoordin_btn_ic" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
                      <div className='accodian_img_bx'>
                        <div className="img_plus">
                          <Image src="/img/plus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                        <div className="minus_img">
                          <Image src="/img/minus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                      </div>
                      How to use whitelist?
                    </button>
                  </h2>
                  <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#accordionExample">
                    <div className="accordion-body acodian_in_p">
                      <p>This guide explains how to withdraw funds from the NAPA blockchain to the Ethereum mainnet. This withdrawal is a two-stage process that takes up to 4 hours to complete. Make sure you have enough NAPA (on NAPA mainnet) in your wallet to cover withdrawal from the NAPA</p>
                      <p>To get started, navigate to the top right of the NAPA Society website and click the wallet icon. For this tutorial, we{"'"}ll be withdrawing ETH from NAPA (represented by a purple diamond logo).You should see your NAPA wallet dashboard and all current tokens bridged to NAPA. Locate the Ether (NAPA-WETH) token and click Withdraw. You{"'"}ll have to click Continue on three pop-up windows. You will be asked to confirm the transaction fee and acknowledge that the withdrawal process may take up to 4 hours to complete. </p>
                      <p>You{"'"}ll be asked to sign the transaction on wallet.matic.network (seen above on MetaMask). The gas amount should be low. The first part of the withdrawal process will take approximately 45 mins to 1 hour. This will move funds to a checkpoint on the Ethereum network. You can return to the window later on to complete the checkpoint. You will see an {'"'}Action Required{'"'} notification on the top right of the window.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingSeven">
                    <button className="accordion-button acoordin_btn_ic" type="button" data-bs-toggle="collapse" data-bs-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
                      <div className='accodian_img_bx'>
                        <div className="img_plus">
                          <Image src="/img/plus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                        <div className="minus_img">
                          <Image src="/img/minus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                      </div>
                      How do I categorize my NFT?
                    </button>
                  </h2>
                  <div id="collapseseven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#accordionExample">
                    <div className="accordion-body acodian_in_p">
                      <p>This guide explains how to withdraw funds from the NAPA blockchain to the Ethereum mainnet. This withdrawal is a two-stage process that takes up to 4 hours to complete. Make sure you have enough NAPA (on NAPA mainnet) in your wallet to cover withdrawal from the NAPA</p>
                      <p>To get started, navigate to the top right of the NAPA Society website and click the wallet icon. For this tutorial, we{"'"}ll be withdrawing ETH from NAPA (represented by a purple diamond logo).You should see your NAPA wallet dashboard and all current tokens bridged to NAPA. Locate the Ether (NAPA-WETH) token and click Withdraw. You{"'"}ll have to click Continue on three pop-up windows. You will be asked to confirm the transaction fee and acknowledge that the withdrawal process may take up to 4 hours to complete. </p>
                      <p>You{"'"}ll be asked to sign the transaction on wallet.matic.network (seen above on MetaMask). The gas amount should be low. The first part of the withdrawal process will take approximately 45 mins to 1 hour. This will move funds to a checkpoint on the Ethereum network. You can return to the window later on to complete the checkpoint. You will see an {'"'}Action Required{'"'} notification on the top right of the window.</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingEight">
                    <button className="accordion-button acoordin_btn_ic" type="button" data-bs-toggle="collapse" data-bs-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
                      <div className='accodian_img_bx'>
                        <div className="img_plus">
                          <Image src="/img/plus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                        <div className="minus_img">
                          <Image src="/img/minus_icon.svg" alt="" width={18} height={18}  />
                        </div>
                      </div>
                      How to use staking?
                    </button>
                  </h2>
                  <div id="collapseeight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#accordionExample">
                    <div className="accordion-body acodian_in_p">
                      <p>This guide explains how to withdraw funds from the NAPA blockchain to the Ethereum mainnet. This withdrawal is a two-stage process that takes up to 4 hours to complete. Make sure you have enough NAPA (on NAPA mainnet) in your wallet to cover withdrawal from the NAPA</p>
                      <p>To get started, navigate to the top right of the NAPA Society website and click the wallet icon. For this tutorial, we{"'"}ll be withdrawing ETH from NAPA (represented by a purple diamond logo).You should see your NAPA wallet dashboard and all current tokens bridged to NAPA. Locate the Ether (NAPA-WETH) token and click Withdraw. You{"'"}ll have to click Continue on three pop-up windows. You will be asked to confirm the transaction fee and acknowledge that the withdrawal process may take up to 4 hours to complete. </p>
                      <p>You{"'"}ll be asked to sign the transaction on wallet.matic.network (seen above on MetaMask). The gas amount should be low. The first part of the withdrawal process will take approximately 45 mins to 1 hour. This will move funds to a checkpoint on the Ethereum network. You can return to the window later on to complete the checkpoint. You will see an {'"'}Action Required{'"'} notification on the top right of the window.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div>
        <hr />
        <Footer footerIconShow={false} />
      </div>
    </div>
    </>
  )
}





