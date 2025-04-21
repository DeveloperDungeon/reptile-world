import { PropsWithChildren } from 'react';
import Module from '../common/Module';
import Image from 'next/image';
import styles from './Card.module.css';

interface Props {
  image?: string;
}

export default function Card({ children, image }: PropsWithChildren<Props>) {
  return (
    <Module>
      {image && <>
        <div className={styles.ImageWrapper}>
          <Image src={image} fill alt='' className={styles.Image} />
        </div>
      </>}
      {children}
    </Module>
  );
}
