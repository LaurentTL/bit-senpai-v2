import styles from './Modal.module.css';

export interface IModal {
  sampleTextProp: string;
}

const Modal: React.FC<IModal> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default Modal;
