import styles from './index.module.css';
import { ReactComponent as UserIcon } from '../../images/user.svg';

interface IProps {
  fullWidth?: boolean;
  children: React.ReactNode;
  type?: string;
  onClick?: () => void
}

const Button = (props: IProps) => {
  const { fullWidth, children, onClick } = props;
  return (
    <button className={`${styles.button} ${fullWidth ? styles.fullWidth : ''}`} onClick={onClick}>
      {!fullWidth && (
        <UserIcon className={styles.icon} width={36} height={36} />
      )}
      {children}
    </button>
  );
};

export { Button };
