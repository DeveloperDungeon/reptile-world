import Image from 'next/image';
import Module from '../Module';
import styles from './Breeder.module.css';

interface BreederData {
  name: string;
  iamgeSrc: string;
}

interface Props {
  breeder: BreederData;
}

export default function Breeder({ breeder }: Props) {
  return (
    <Module title={`${breeder.name} 브리더`}>
      <div className={styles.Breeder}>
        <div className={styles.ProfileImageWrapper}>
          <Image src={breeder.iamgeSrc} fill alt={breeder.name} style={{ objectFit: 'cover' }} priority />
        </div>
        <div className={styles.Content}>
          <p className={styles.Description}>윤리적이고 전문적인 파충류 브리더입니다.</p>
          <ul className={styles.Facts}>
            <li>경력: 12년</li>
            <li>브리딩 수: 150마리</li>
          </ul>
        </div>
      </div>
    </Module>
  );
}
