import { StyledProps } from '@/app/common/props';
import { PropsWithChildren } from 'react';
import styles from './Module.module.css';

interface Props {
  title?: string;
}

export default function Module({ children, className, style, title }: PropsWithChildren<StyledProps<Props>>) {
  return (
    <div className={styles.Module + ' ' + className} style={style}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}
