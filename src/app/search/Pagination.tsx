import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Module from '../common/Module';
import styles from './Pagination.module.css';

export default function Pagination() {
  return (
    <Module className={styles.Pagination}>
      <div className={styles.PageInfo}>Showing 1-8 of 24 results</div>
      <div className={styles.Buttons}>
        <MdChevronLeft className={styles.Left + ' ' + styles.Button + ' ' + styles.Disabled} />
        <div className={styles.Button + ' ' + styles.Number + ' ' + styles.Selected}>1</div>
        <div className={styles.Button + ' ' + styles.Number}>2</div>
        <div className={styles.Button + ' ' + styles.Number}>3</div>
        <MdChevronRight className={styles.Right + ' ' + styles.Button} />
      </div>
    </Module>
  );
}
