import styles from './index.module.css';
import { ReactComponent as LikeIcon } from '../../images/like.svg';

interface IProps {
  count: number;
  negative?: boolean;
}

const Counter = (props: IProps) => {
  const { count, negative = false } = props;
  return (
    <div className={`${styles.counter} ${negative ? styles.negative : ''}`}>
      <LikeIcon
        className={`${styles.icon} ${negative ? styles['negative-icon'] : ''}`}
        width={32}
        height={32}
      />
      {count}
    </div>
  );
};

export { Counter };
