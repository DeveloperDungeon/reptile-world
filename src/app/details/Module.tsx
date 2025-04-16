import { PropsWithChildren } from 'react';
import styles from './Module.module.css';
import { StyledProps } from '../common/props';

export default function Module({ children, className, style }: PropsWithChildren<StyledProps>) {
  return (
    <div className={styles.Module + ' ' + className} style={style}>
      {children}
    </div>
  );
}
