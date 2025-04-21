import BreederData from '@/app/data/BreederData';
import Image from 'next/image';
import Module from '../../../../common/Module';
import styles from './Breeder.module.css';

interface Props {
  breeder: BreederData;
}

export default function Breeder({ breeder }: Props) {
  return (
    <Module title={`${breeder.name} 브리더`}>
      <div className={styles.Breeder}>
        <div className={styles.ProfileImageWrapper}>
          <Image src={breeder.imageSrc} fill alt={breeder.name} style={{ objectFit: 'cover' }} priority />
        </div>
        <div className={styles.Content}>
          {breeder.description && <p className={styles.Description}>{breeder.description}</p>}
          {breeder.facts?.length && <>
            <ul className={styles.Facts}>
              {breeder.facts.map((fact) => <li key={`fact-${fact.fact}`}>{fact.fact}: {fact.value}</li>)}
            </ul>
          </>}
        </div>
      </div>
    </Module>
  );
}
