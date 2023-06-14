import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCookie } from 'cookies-next';

const WithAuth = (Component: any) => {
  const Auth = (props: any) => {
    const [showing, setShowing] = useState(false);
    const { replace } = useRouter();

    //@ts-ignore
    useEffect(() => {
      setShowing(true);
      const profileId = getCookie('profileId');
      if (!profileId) {
        replace('/');
      }
       // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    if (!showing) {
      return null;
    }
    if (typeof window === 'undefined') return <></>;
    return <Component {...props} />;
  };
  return Auth;
};

export default WithAuth;
