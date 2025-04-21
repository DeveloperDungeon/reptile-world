import { StyledProps } from '@/app/common/props';
import { PropsWithChildren } from 'react';
import styles from './Module.module.css';

interface Props {
  title?: string;
  floatOnHover?: boolean;
}

export default function Module({ children, className, style, title, floatOnHover }: PropsWithChildren<StyledProps<Props>>) {
  return (
    <div className={styles.Module +
      (className ? ' ' + className : '') +
      (floatOnHover ? ' ' + styles.FloatOnHover : '')} style={style}>
      {title && <h3>{title}</h3>}
      {children}
    </div>
  );
}
