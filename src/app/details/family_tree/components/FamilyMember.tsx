import Image from 'next/image';
import FamilyMemberData from '../FamilyMemberData';
import styles from './FamilyMember.module.css';

interface RelationLines {
  // Used to connect with parents.
  top?: boolean;
  // Used to connect with a couple female.
  right?: boolean;
  // Used to connect with a couple male.
  left?: boolean;
}

interface Props {
  member: FamilyMemberData;
  relationLines?: RelationLines;
}

export default function FamilyMember({ member, relationLines }: Props) {
  return (
    <div className={styles.FamilyMember} style={{ width: 50, height: 50 }}>
      {relationLines?.top && <div className={styles.TopRelationLine} />}
      {relationLines?.right && <div className={styles.RightRelationLine} />}
      {relationLines?.left && <div className={styles.LeftRelationLine} />}
      <Image src={member.imageSrc} alt={member.name} fill className={styles.Image} />
    </div>
  );
}
