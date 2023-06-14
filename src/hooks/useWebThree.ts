import WebThreeContext from '../contexts/WebThreeContext';
import { useContext } from 'react';

const useWebThree = () => {
  return useContext(WebThreeContext);
};

export default useWebThree;
