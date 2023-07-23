import { createPortal } from 'react-dom';
import styles from './index.module.css';

interface IProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = (props: IProps) => {
  const { onClose, children } = props;
  return createPortal(
    <div onClick={onClose} className={styles.modal}>
      {children}
    </div>,
    document.body
  );
};

export { Modal };
