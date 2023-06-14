import type { NextPage } from 'next';
import Image from 'next/image';
import styles from './Button.module.scss';

type ButtonProps = {
  text: string;
  outlined?: boolean;
  customStyle?: string;
  icon?: string;
  onClick?: () => void;

};

const Button: NextPage<ButtonProps> = ({
  text,
  outlined,
  customStyle,
  icon,
  onClick,

}) => {
  return (
    <button
      className={`${outlined ? styles.btnOutlined : styles.btn} ${
        customStyle && customStyle
      }`}

      onClick={onClick}

    >
      {icon && (
        <Image
          src={icon}
          width={50}
          height={30}
          className={styles.icon}
          alt={`${text}`}
        />
      )}
      <span>{text}</span>
    </button>
  );
};
export default Button;
