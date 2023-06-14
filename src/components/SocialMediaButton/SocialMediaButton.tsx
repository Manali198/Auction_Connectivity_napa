import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './SocialMediaButton.module.scss';

type SocialMediaButtonProps = {
  className: any;
  icon: string;
  title: string;
  textColor: string;
};

const SocialMediaButton: NextPage<SocialMediaButtonProps> = ({
  className,
  icon,
  title,
  textColor,
}) => {
  return (
    <div className={className}>
      <div className={styles.btnLeftSide}>
        <Image src={icon} alt={'icon'} width={30} height={30} />
        <span>{title}</span>
      </div>
      <div className={styles.connect} style={{ color: `${textColor}` }}>
        <span>Connect</span>
      </div>
    </div>
  );
};

export default SocialMediaButton;
