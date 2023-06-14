import Image from 'next/image';

import styles from './CustomToast.module.scss';

type CustomToastWithLinkProps = {
  icon?: string;
  title: string;
  description?: string;
  time?: string;
};

export const CustomToastWithLink = ({
  icon,
  title,
  description,
  time,
}: CustomToastWithLinkProps) => (
  <div className={`${styles.toast} d-flex`}>
    {icon ? (
      <div className="d-flex align-items-center">
        <div className={styles.toastIcon}>
          <Image src={icon} alt={`${title}`} width={25} height={25} />
        </div>
        <div>
          <p className={styles.toastTitle}>{title}</p>
          {description && <p className={styles.toastMessage}>{description}</p>}
        </div>
      </div>
    ) : (
      <div>
        <p className={styles.toastTitle}>{title}</p>
        {description && <p className={styles.toastMessage}>{description}</p>}
      </div>
    )}

    <span className={styles.toastTime}>{time && time}</span>
  </div>
);
