import type { NextPage } from 'next';
import styles from './Dropdown.module.scss';

import { Options } from '../../typing/typing';

type DropDownComponentProps = {
  options: Options[];
  title?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  dropDownValue: string;
  disabled?: boolean;
};

const DropDownComponent: NextPage<DropDownComponentProps> = ({
  options,
  title,
  onChange,
  dropDownValue,
  disabled,
}) => {
  return (
    <div className={`form-floating ${styles.dropdownContainer}`}>
      <select
        className={`form-select ${styles.selectContainer}`}
        id="floatingSelect"
        aria-label="Floating label select example"
        value={dropDownValue}
        onChange={onChange}
        disabled={disabled}
      >
        {options.map(({ value, name }, index) => {
          return (
            <option
              className={styles.option}
              selected={value === dropDownValue}
              value={value}
              key={index}
            >
              {name}
            </option>
          );
        })}
      </select>
      {title && (
        <label className={styles.selectLabel} htmlFor="floatingSelect">
          {title}
        </label>
      )}
    </div>
  );
};

export default DropDownComponent;
