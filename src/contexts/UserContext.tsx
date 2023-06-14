import React, { createContext, useCallback, useEffect, useState } from 'react';
import lodash from 'lodash';
import {
  setCookie,
  getCookie,
  // deleteCookie
} from 'cookies-next';
import axios from 'axios';
import { toast } from 'react-toastify';
import useWebThree from '../hooks/useWebThree';
import { API_URL, WEBSOCKET_URL } from '../constants/url';

import { DoneIcon, ErrorIcon } from '../components/assets';
import { CustomToastWithLink } from '../components/CustomToast/CustomToast';
import { ToastDescription, ToastTitle } from '../typing/toast';
import { ProfileDetails } from '../typing/typing';

type UserContextType = {
  getUserProfileDetails: (id: string) => void;
  createUserProfile: (user: any) => void;
  updateUserProfile: (user: any, id: string) => void;
  getProfileIdFromLocalStorage: () => void;
  profileDetails: ProfileDetails;
  profileId: string;
  profileName: string;
  loading: boolean;
};

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserContextProvider = (props: { children: React.ReactNode }) => {
  const [profileDetails, setProfileDetails] = useState<ProfileDetails>();
  const [profileId, setProfileId] = useState('');
  const { account } = useWebThree();
  const [profileName, setProfileName] = useState('');
  const [loading, setLoading] = useState(false);
  // deleteCookie('profileId');

  const getProfileIdFromLocalStorage = useCallback(async () => {
    const data = getCookie('profileId');
    if (data) {
      // @ts-ignore
      setProfileId(data);
    }
  }, [setProfileId]);

  useEffect(() => {
    getProfileIdFromLocalStorage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (profileId) {
      const socket = new WebSocket(WEBSOCKET_URL);
      getUserProfileDetails(profileId);
      // @ts-ignore
      socket.addEventListener('message', ({ data }) => {
        const response = JSON.parse(data);
        if (response?.event === `update-user-${profileId}`) {
          getUserProfileDetails(profileId);
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileId]);

  const getUserProfileDetails = useCallback(
    async (profileId: string) => {
      try {
        if (!profileId) {
          return;
        }
        setLoading(true);
        const response = await axios.get(
          `${API_URL}/user/account/details/${profileId}`
        );
        setProfileId(response?.data?.data?.profileId);
        setProfileDetails(response?.data?.data);
        setLoading(false);
        return response?.data?.data;
      } catch (error: any) {
        setLoading(false);
        if (error?.response?.data?.message === 'User Not Found') {
          console.log('Account Not Found in our System');
          toast.error(
            CustomToastWithLink({
              title: ToastTitle.ERROR,
              icon: ErrorIcon,
              description: 'Account Not Found in our System',
            })
          );
          return;
        }
        toast.error(
          CustomToastWithLink({
            title: ToastTitle.ERROR,
            icon: ErrorIcon,
            description: ToastDescription.ERROR,
          })
        );
      }
    },
    [setProfileId, setProfileDetails]
  );

  const createUserProfile = useCallback(
    async (user: any) => {
      try {
        const res = await axios.post(`${API_URL}/user/account/new`, user);
        setCookie('profileId', res?.data?.data.profileId);
        setProfileId(res?.data?.data.profileId);
        setProfileDetails(res.data.data);
        await getUserProfileDetails(profileDetails?.profileId || account);
      } catch (error) {
        console.log('Unable to create profile');
        toast.error(
          CustomToastWithLink({
            title: ToastTitle.ERROR,
            icon: ErrorIcon,
            description: ToastDescription.ERROR,
          })
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setProfileId, setProfileDetails, account]
  );

  const updateUserProfile = useCallback(
    async (user: any, profileId: string) => {
      try {
        const res = await axios.patch(
          `${API_URL}/user/account/update/${profileId}`,
          user
        );
        setProfileName(res?.data?.data.profileName);
        await getUserProfileDetails(res?.data?.data.profileId || account);
        toast.success(
          CustomToastWithLink({
            icon: DoneIcon,
            title: ToastTitle.CHANGES_SAVED,
            description: ToastDescription.CHANGES_SAVED,
            time: 'Now',
          })
        );
      } catch (error) {
        console.log('Unable to update profile');
        toast.error(
          CustomToastWithLink({
            title: ToastTitle.ERROR,
            icon: ErrorIcon,
            description: ToastDescription.ERROR,
          })
        );
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [setProfileName, account]
  );

  const value = {
    profileDetails,
    getProfileIdFromLocalStorage,
    createUserProfile,
    profileId,
    profileName,
    getUserProfileDetails,
    updateUserProfile,
    loading,
  };

  return (
    // @ts-ignore
    <UserContext.Provider value={value}>
      <React.Fragment>
        <div>{lodash.get(props, 'children', false) && props.children}</div>
      </React.Fragment>
    </UserContext.Provider>
  );
};

export default UserContext;
