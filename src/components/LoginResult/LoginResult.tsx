import styles from './index.module.css';
import { ReactComponent as SuccessIcon } from '../../images/success.svg';

interface IProps {
  success?: boolean;
}

const LoginResult = (props: IProps) => {
  const { success = false } = props;

  return (
    <div
      className={`${styles.container} ${success ? '' : styles.containerError}`}
      onClick={(e) => e.stopPropagation()}
    >
      <SuccessIcon />
      <h1>{success ? 'SUCCESS!' : 'ERROR!'}</h1>
    </div>
  );
};

export { LoginResult };
