import type { NextPage } from 'next';
import styles from './Input.module.scss';

type InputProps = {
  type: string;
  placeholder: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
};

const Input: NextPage<InputProps> = ({
  type,
  placeholder,
  label,
  value,
  onChange,
  disabled,
}) => {
  return (
    <div className={`${styles.inputField} form-floating mb-3`}>
      <input
        type={type}
        className="form-control"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
      <label>{label}</label>
    </div>
  );
};

export default Input;
