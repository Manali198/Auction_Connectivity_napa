import type { NextPage } from 'next';
import { useCallback, useEffect, useRef, useState } from 'react';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';
import styles from '../Settings.module.scss';

import useWebThree from '../../..//hooks/useWebThree';
import useProfile from '../../../hooks/useProfile';

import {
  // AccountNapaLogoIcon,
  AvatarIcon,
  DoneIcon,
  ErrorIcon,
  FacebookBlueIcon,
  TwitterBlueIcon,
  WalletNeedsToConnected,
} from '../../../components/assets';
import { CustomToastWithLink } from '../../CustomToast/CustomToast';
import DropDownComponent from '../../Dropdown/Dropdown';
import Input from '../../Input/Input';
import SocialMediaButton from '../../SocialMediaButton/SocialMediaButton';
import Timezone from '../../TimezoneSelect/TimezoneSelect';
import { currencies, languages } from '../../../constants/settings.constants';
import { ToastDescription, ToastTitle } from '../../../typing/toast';
import Image from 'next/image';
import Tippy from '@tippyjs/react';
import { FadeLoader } from 'react-spinners';
import { SOCIAL_ART_WEBSOCKET_URL } from '../../../constants/url';

const GeneralTab: NextPage = () => {
  const socialArtSocket = new WebSocket(SOCIAL_ART_WEBSOCKET_URL);
  const [name, setName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [bio, setBio] = useState('');
  const [currency, setCurrency] = useState('NAPA');
  const [language, setLanguage] = useState('English');
  const [selectedTimezone, setSelectedTimezone] = useState<any>('');
  const { account } = useWebThree();
  const { push } = useRouter();
  const {
    createUserProfile,
    profileDetails,
    updateUserProfile,
    profileId,
    loading,
  } = useProfile();
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const inputRef = useRef(null);
  const [loader, setLoader] = useState(true);
  const [tokenPrice, setTokenPrice] = useState(`4.29650254`);

  useEffect(() => {
    // @ts-ignore
    socialArtSocket.addEventListener('message', ({ data }) => {
      const response = JSON.parse(data);
      if (response?.event === 'napa-token-price') {
        setTokenPrice(response?.price);
      }
    });
    return () => {
      socialArtSocket.removeEventListener('message', () => {});
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 1000);
    if (profileDetails) {
      setName(profileDetails.profileName);
      setEmailAddress(profileDetails.emailAddress);
      setBio(profileDetails.bio || '');
      setSelectedTimezone(profileDetails.timezone || '');
      setCurrency(profileDetails.primaryCurrency);
      setLanguage(profileDetails.language || 'English');
      setPreview(profileDetails?.avatar as any);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileDetails]);

  const createUserProfileHandler = useCallback(async () => {
    try {
      if (!account) {
        toast.error(
          CustomToastWithLink({
            icon: WalletNeedsToConnected,
            title: ToastTitle.WALLET_NEEDS_TO_CONNECTED,
            description: ToastDescription.WALLET_NEEDS_TO_CONNECTED,
            time: 'Now',
          })
        );
        return;
      }
      if (!name) {
        toast.error(
          CustomToastWithLink({
            icon: ErrorIcon,
            title: 'Profile name is required',
            description: 'Field is required',
            time: 'Now',
          })
        );
        return;
      }
      const user = {
        accountNumber: account,
        profileName: name,
        bio,
        primaryCurrency: currency,
        language: language || 'English',
        timezone: selectedTimezone.value,
        napaSocialMediaAccount: '',
        tokenPrice: tokenPrice,
      };

      const formData = new FormData();
      // @ts-ignore
      formData.append('user', JSON.stringify(user));
      //@ts-ignore
      formData.append('avatar', file ? file : '');

      // @ts-ignore
      await createUserProfile(formData);
      toast.success(
        CustomToastWithLink({
          icon: DoneIcon,
          title: ToastTitle.CHANGES_SAVED,
          description: ToastDescription.CHANGES_SAVED,
          time: 'Now',
        })
      );
      push('/trending');
    } catch (error) {
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: ToastTitle.ERROR,
          description: ToastDescription.ERROR,
          time: 'Now',
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    name,
    emailAddress,
    bio,
    currency,
    language,
    selectedTimezone,
    account,
    profileId,
    preview,
  ]);

  const updateUserProfileHandler = useCallback(async () => {
    try {
      // if (!account) {
      //   toast.error(
      //     CustomToastWithLink({
      //       icon: WalletNeedsToConnected,
      //       title: ToastTitle.WALLET_NEEDS_TO_CONNECTED,
      //       description: ToastDescription.WALLET_NEEDS_TO_CONNECTED,
      //       time: 'Now',
      //     })
      //   );
      //   return;
      // }
      if (!name) {
        toast.error(
          CustomToastWithLink({
            icon: ErrorIcon,
            title: 'Profile name is required',
            description: 'Field is required',
            time: 'Now',
          })
        );
        return;
      }
      const formData = new FormData();
      formData.append('profileName', name);
      formData.append('emailAddress', emailAddress);
      formData.append('bio', bio);
      formData.append('timezone', selectedTimezone.value || selectedTimezone);
      formData.append('primaryCurrency', currency);
      formData.append('language', language || 'English');
      formData.append('avatar', file ? file : '');
      formData.append('accountType', '');
      formData.append('metamaskAccountNumber', account || '');

      await updateUserProfile(formData, profileId);
    } catch (error) {
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: ToastTitle.ERROR,
          description: ToastDescription.ERROR,
          time: 'Now',
        })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    name,
    emailAddress,
    bio,
    currency,
    language,
    selectedTimezone,
    profileDetails,
    profileId,
    account,
    preview,
  ]);

  const handleDragOver = (ev: any) => {
    ev.preventDefault();
    ev.stopPropagation();
    ev.dataTransfer.dropEffect = 'copy';
  };

  const handleDropBanner = (ev: any) => {
    ev.preventDefault();
    ev.stopPropagation();
    handleDrop(ev.dataTransfer.files[0]);
  };

  const handleClick = () => {
    // @ts-ignore
    inputRef.current.click();
  };

  const handleChange = (ev: any) => {
    handleOnChange(ev.target.files[0]);
    // @ts-ignore
    inputRef.current.value = null;
  };

  const handleOnChange = useCallback((file: any) => {
    if (!file) {
      return;
    }
    const allowedFiles = ['image/jpg', 'image/png', 'image/jpeg'];
    const fileSize = file.size;
    if (!allowedFiles.includes(file?.type)) {
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: 'Invalid Format',
          description: 'Please upload an image in jpg, png or jpeg format',
          time: 'Now',
        })
      );
      return;
    }
    if (fileSize > 1024 * 1024) {
      toast.error(
        CustomToastWithLink({
          icon: ErrorIcon,
          title: 'Invalid File Size',
          description: "File size can't exceed 1 MB",
          time: 'Now',
        })
      );
      return;
    }
    setFile(file);
    const reader = new FileReader();

    reader.addEventListener(
      'load',
      () => {
        // @ts-ignore
        setPreview(reader.result);
      },
      false
    );

    if (file) {
      reader.readAsDataURL(file);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDrop = (file: any) => {
    handleOnChange(file);
  };

  const handleRemove = () => {
    setFile(null);
    setPreview(null);
  };

  return (
    <>
      {loading || loader ? (
        <div className={styles.loaderContainer}>
          <FadeLoader color="#ffffff" />
        </div>
      ) : (
        <div className={`row col-12 ${styles.leftSideContainer}`}>
          <input
            hidden
            type="file"
            aria-label="add files"
            className={styles.input}
            ref={inputRef}
            onChange={handleChange}
          />
          <div className={styles.uploadImageConatiner}>
            {!file && !preview ? (
              <>
                <Tippy
                  className="toolTipContainer"
                  placement="bottom"
                  content={
                    <div>
                      <p>Supported format: jpg or png.</p>
                      <p>Maximum size: 1MB</p>
                    </div>
                  }
                >
                  <div
                    className={styles.banner}
                    onDragOver={(e) => handleDragOver(e)}
                    onDrop={(e) => handleDropBanner(e)}
                    onClick={() => handleClick()}
                  >
                    <Image
                      src={AvatarIcon}
                      width={32}
                      height={32}
                      alt="avatar"
                    />
                  </div>
                </Tippy>
              </>
            ) : (
              preview && (
                <img src={preview} className={styles.preview} alt="avatar" />
              )
            )}
            <div className={styles.uploadBtnContainer}>
              <Tippy
                placement="bottom"
                className="toolTipContainer"
                content={
                  <div>
                    <p>Supported format: jpg or png.</p>
                    <p>Maximum size: 1MB</p>
                  </div>
                }
              >
                <span
                  className={styles.changeBtn}
                  onClick={() => handleClick()}
                >
                  {preview ? 'Change' : 'Browse'}
                </span>
              </Tippy>
              <span className={styles.removeBtn} onClick={() => handleRemove()}>
                {preview ? 'Remove' : ''}
              </span>
            </div>
          </div>
          <div className={`col-xl-6 padng_none`}>
            <div className={styles.formContainer}>
              <Input
                value={name}
                type="text"
                placeholder="Profile Name"
                label="Profile Name"
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                value={emailAddress}
                type="email"
                disabled
                placeholder="Email"
                label="Email"
                onChange={(e) => setEmailAddress(e.target.value)}
              />
              <div className={styles.textArea}>
                <span>Bio</span>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                />
              </div>
              <Timezone
                value={selectedTimezone}
                onChange={setSelectedTimezone}
              />
              <DropDownComponent
                title="Currency"
                options={currencies}
                dropDownValue={currency}
                onChange={(e) => setCurrency(e.target.value)}
              />
              <DropDownComponent
                title="Language"
                options={languages}
                dropDownValue={language}
                onChange={(e) => {
                  setLanguage(e.target.value);
                }}
              />
              <button
                className={styles.saveChanges}
                onClick={() => {
                  // if (!account) {
                  //   toast.error(
                  //     CustomToastWithLink({
                  //       icon: WalletNeedsToConnected,
                  //       title: ToastTitle.WALLET_NEEDS_TO_CONNECTED,
                  //       description: ToastDescription.WALLET_NEEDS_TO_CONNECTED,
                  //       time: 'Now',
                  //     })
                  //   );
                  //   return;
                  // }
                  if (profileId) {
                    updateUserProfileHandler();
                    return;
                  }
                  createUserProfileHandler();
                }}
              >
                Save changes
              </button>
            </div>
          </div>
          <div className={`col-xl-6 ${styles.rightSideContainer}`}>
            {/* <div
              className={styles.firstChild}
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <h1 className={styles.napa}>NAPA Social Art</h1>
              <SocialMediaButton
                className={styles.accountBtn}
                title="Your Account"
                textColor="#16E6EF"
                icon={AccountNapaLogoIcon}
              />
            </div> */}
            {/* <div className="collapse" id="collapseExample">
              <div className={styles.SocialNapaForm}>
                <div className={styles.HadFormNapa}>
                  <h5>Connect NAPA Social Art Account</h5>
                  <button
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseExample"
                    aria-expanded="false"
                    aria-controls="collapseExample"
                  >
                    <Image
                      src="/img/exit_icon_form.svg"
                      alt=""
                      width={24}
                      height={24}
                    />
                  </button>
                </div>
                <Input
                  value={'dwight.holland@gmail.com'}
                  type="text"
                  placeholder="Username"
                  label="Username"
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  value={'. . . . . . . .'}
                  type="text"
                  placeholder="Username"
                  label="Password"
                  onChange={(e) => setName(e.target.value)}
                />
                <button className={styles.LogInButton}>Log In</button>
              </div>
            </div> */}
            <div className={styles.secondChild}>
              <h1 className={styles.social}>Social Connections</h1>
              <SocialMediaButton
                className={styles.twitterBtn}
                title="Twitter"
                textColor="#1D9BF0"
                icon={TwitterBlueIcon}
              />
              <SocialMediaButton
                className={styles.facebookBtn}
                title="Facebook"
                icon={FacebookBlueIcon}
                textColor="#1877F2"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GeneralTab;
