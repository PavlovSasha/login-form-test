import styles from './index.module.css';
import { ReactComponent as ErrorIcon } from '../../images/error.svg';

interface IProps {
  label: string;
  type: 'password' | 'email';
  onChange: (value: string) => void;
  value: string;
  error: string;
}

const FormInput = (props: IProps) => {
  const { label, type, onChange, value, error } = props;
  return (
    <>
      <label className={styles.label}>
        <span className={styles.labelText}>{label}</span>
        <input
          className={`${styles.input} ${error ? styles.inputError : ''}`}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          type={type}
        />
        {error && (
          <>
            <ErrorIcon className={styles.errorIcon} />
            <span className={styles.error}>{error}</span>
          </>
        )}
      </label>
    </>
  );
};

export { FormInput };
