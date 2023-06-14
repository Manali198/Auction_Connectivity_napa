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
// import HighlightButton from '@/components/HighlightButton/HighlightButton';
// import useProfile from '@/hooks/useProfile';

type SectionFourProps = {
  snftDetails: SnftResponse | null;
};

export default function SectionFourTbl({ snftDetails }: SectionFourProps) {
  const [offers, setOffers] = React.useState<any>([]);
  const [getOffersLoading, setGetOffersLoading] = React.useState(false);
  const socialArtSocket = new WebSocket(SOCIAL_ART_WEBSOCKET_URL);
  // const { profileDetails } = useProfile();

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
      socialArtSocket.removeEventListener('message', () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const btnClickHandle =()=>{
  //   alert("hello")
  // }

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
                  <th className={styles.tableTitle}>Price</th>
                  <th className={styles.tableTitle}>USD Price</th>
                  <th className={styles.tableTitle}>Floor Difference</th>
                  <th className={styles.tableTitle}>Expiration</th>
                  <th className={styles.tableTitle}>From</th>
                </tr>
              </thead>
              <tbody className={styles.tableBody}>
                {offers.map((offer: Offer) => {
                  return (
                    <tr key={offer.offerId} className={styles.tableRow}>
                      <td className={styles.tableTd}>
                        <Image
                          src="/img/napa_ic_white.svg"
                          alt=""
                          width={17}
                          height={13}
                        />
                        <span> {offer.amount}</span>
                        <span> ETH</span>
                      </td>
                      <td className={styles.tableTd}>
                        ${' '}
                        {(
                          Number(offer?.amount) *
                          Number(snftDetails?.napaTokenEarned)
                        ).toFixed(8)}
                      </td>
                      <td className={styles.tableTd}>--</td>
                      <td className={styles.tableTd}>{offer.expiresIn}</td>
                      <td className={styles.tableTd}>{offer.userName}</td>
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
