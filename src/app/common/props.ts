import { CSSProperties } from 'react';

export type StyledProps<P = unknown> = P & {
  className?: string;
  style?: CSSProperties | undefined;
};
