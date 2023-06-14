import React, { useEffect } from 'react';
import styles from './SectionFourTbl.module.scss';
import Image from 'next/image';
import { SnftResponse } from '../../../types/marketplace';
import { getOffers } from '@/services/offersApi';
import { toast } from 'react-toastify';
import { CustomToastWithLink } from '@/components/CustomToast/CustomToast';
import { ErrorIcon } from '@/components/assets';
import { FadeLoader } from 'react-spinners';
import { Offer } from '@/types/offers';
import { SOCIAL_ART_WEBSOCKET_URL } from '@/constants/url';
import { auctionaddress } from '@/connectivity/addressHelpers/addressHelper';
import { ethers } from 'ethers';
import abi1 from '@/connectivity/abis/Auction.json';


// import HighlightButton from '@/components/HighlightButton/HighlightButton';
// import useProfile from '@/hooks/useProfile';

type SectionFourProps = {
  snftDetails: SnftResponse | null;
};

let auctionAbi = abi1.abi;

export default function SectionFourTbl({ snftDetails }: SectionFourProps) {
  const [offers, setOffers] = React.useState<any>([]);
  const [auctionId, setAuctionId] = React.useState('');
  const [bids,setBids] = React.useState([]);
  const [getOffersLoading, setGetOffersLoading] = React.useState(false);
  const socialArtSocket = new WebSocket(SOCIAL_ART_WEBSOCKET_URL);
  // const { profileDetails } = useProfile();

  const { ethereum } = window as any;
  const provider = new ethers.providers.Web3Provider(ethereum);
  const signer = provider.getSigner();

  console.log(bids,"-line 38-");
  
  const handleGetOffers = async () => {
    setGetOffersLoading(true);
    const { error, message, data } = await getOffers(
      snftDetails?.snftId as string
    );
    setOffers(data?.data || []);
    if (error) {
      setGetOffersLoading(false);
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: 'Error',
          description: message,
          time: 'Now',
        })
      );
      return;
    }
    setGetOffersLoading(false);
  };

  useEffect(() => {
    if (snftDetails?.snftId) handleGetOffers();
  }, [snftDetails]);

  const handleNewOffer = (offer: any) => {
    if (offers.length == 0) {
      setOffers([offer]);
    } else {
      setOffers((prev: any) => [...offer, ...prev]);
    }
  };

  useEffect(() => {
    // @ts-ignore
    socialArtSocket.addEventListener('message', ({ data }) => {
      const response = JSON.parse(data);
      if (response?.event === 'new-offer') {
        handleNewOffer(response.offer);

      }
    });
    return () => {
      socialArtSocket.removeEventListener('message', () => { });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const btnClickHandle =()=>{
  //   alert("hello")
  // }

  useEffect(()=>{
    const pay =async ()=>{
      const auctionContract = new ethers.Contract(auctionaddress, auctionAbi, signer);
      // const getmakebid = await auctionContract.fetchAllAuctionBids(Number(auctionId));
      const getmakebid = await auctionContract.fetchAllAuctionBids("7");

      // setAuctionId(getmakebid);
      console.log(getmakebid,"--line 97--");
      let data = getmakebid.map((getmakebid:any )=> ({
        auctionId: getmakebid.auctionId || "",
        bidId: getmakebid.bidId.toString() || "",
        bidderAddress: getmakebid.bidderAddress.toString() || "",
        amount: getmakebid.amount.toString() 
      }))
      setBids(data);
     };   
    pay();
  },[])
  
  return (
    <div className={styles.SectionThree}>
      <div className="col-lg-12">
        <div className={styles.MainTable}>
          {snftDetails?.type === 'Fixed Price' ? (
            <h4>Offers</h4>
          ) : (
            <h4>Offers</h4>
          )}
        </div>
        <div className={styles.MainTableTable}>
          {getOffersLoading ? (
            <div className={styles.loaderContainer}>
              <FadeLoader color="#ffffff" />
            </div>
          ) : offers.length ? (
            <table className={styles.tableMain}>
              <thead className={styles.tableHead}>
                <tr className={styles.tableRow}>
                  <th className={styles.tableTitle}>Auction ID</th>
                  <th className={styles.tableTitle}>Bid Id</th>
                  <th className={styles.tableTitle}>Bidder Address</th>
                  <th className={styles.tableTitle}>Amount</th>
                </tr>
              </thead>
              <tbody className={styles.tableBody}>
                {bids.map((offer: Offer) => {
                  return (
                    <tr key={offer.offerId} className={styles.tableRow}>
                      <td className={styles.tableTd}>
                        <Image
                          src="/img/napa_ic_white.svg"
                          alt=""
                          width={17}
                          height={13}
                        />
                        {/* <span> {ethers.utils.formatEther(offer.auctionId)} </span> */}
                        <span> {offer.auctionId.toNumber()} </span> 
                       
                      </td>

                      <td className={styles.tableTd}>
                        {/* ${' '}
                        {(
                          Number(offer?.amount) *
                          Number(snftDetails?.napaTokenEarned)
                        ).toFixed(8)} */}
                        {offer.bidId}
                        
                      </td>
                      <td className={styles.tableTd}>{offer.bidderAddress}</td>
                      <td className={styles.tableTd}>{offer.amount}
                      <span> ETH</span>
                      </td>
                      {/* <div  className={styles.BottomAction}>
                        <button onClick={() => pay(auctionId.toString())} type="button" >
                          Bid
                        </button>
                      </div> */}
                      {/* <td className={styles.tableTd}>{offer.userName}</td> */}
                      {/* <td className={styles.tableTd}>
                        {!(
                          profileDetails.profileId == snftDetails?.profileId &&
                          profileDetails.profileId == offer?.profileId
                        ) && <p style={{ visibility: 'hidden' }}>text</p>}
                        {'profileDetails.profileId' ==
                          snftDetails?.profileId && (
                          <HighlightButton
                            // event={btnClickHandle}
                            title="Accept"
                            link=""
                          />
                        )}
                        {profileDetails.profileId == offer?.profileId && (
                          <HighlightButton
                            // event={btnClickHandle}
                            title="Cancel"
                            link=""
                          />
                        )}
                      </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className={styles.notFound}>
              <p>No Offers Yet</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
