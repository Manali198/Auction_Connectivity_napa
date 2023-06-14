import UserContext from '../contexts/UserContext';
import { useContext } from 'react';

const useProfile = () => {
  return useContext(UserContext);
};

export default useProfile;
