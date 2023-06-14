import type { NextPage } from 'next';
import styles from './Container.module.scss';

type Props = {
  className?: string;
  children: any;
};

const Container: NextPage<Props> = ({ className, children }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
