import React, { useEffect } from 'react';
import 'bootstrap-daterangepicker/daterangepicker.css';
import 'bootstrap/dist/css/bootstrap.css';
import styles from './CreateNewNFTTow.module.scss';
import SectionOne from './section/SectionOne';
import SectionTow from './section/SectionTow';
import SectionThreeTbl from './section/SectionThreeTbl';
import SectionFourTbl from './section/SectionFourTbl';
// import SectionFiveSlider from './section/SectionFiveSlider';
import { SnftResponse } from '../../types/marketplace';
import { getSnft } from '../../services/MarketplaceApi';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { CustomToastWithLink } from '../CustomToast/CustomToast';
import { ErrorIcon } from '../assets';
import { FadeLoader } from 'react-spinners';
import useProfile from '../../hooks/useProfile';

export default function CreateNewNFTTow() {
  const router = useRouter();
  const [snftDetails, setSnftDetails] = React.useState<SnftResponse | null>(
    null
  );
  const [loading, setLoading] = React.useState(false);
  const { profileId } = useProfile();

  useEffect(() => {
    handleGetSnft();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleGetSnft = async () => {
    setLoading(true);
    const { data, error, message }: any = await getSnft(
      router?.query?.id as string
    );
    if (error) {
      setLoading(false);
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
    setSnftDetails(data?.data || []);
    setLoading(false);
  };

  return (
    <>
      <div className="CreateNewnftTow">
        {loading ? (
          <div className={styles.loaderContainer}>
            <FadeLoader color="#ffffff" />
          </div>
        ) : (
          <>
            <SectionOne snftDetails={snftDetails} profileId={profileId} />
            <SectionTow snftDetails={snftDetails} />
            <SectionThreeTbl />
            {snftDetails?.type !== 'Fixed Price' && (
              <SectionFourTbl snftDetails={snftDetails} />
            )}
            {/* <SectionFiveSlider /> */}
          </>
        )}
      </div>
    </>
  );
}
