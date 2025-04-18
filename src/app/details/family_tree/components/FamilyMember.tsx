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
  // Used to connect with left sibling.
  topLeft?: boolean;
  // Used to connect with children.
  bottomLeft?: boolean;
}

export interface FamilyMemberProps {
  member: FamilyMemberData;
  relationLines?: RelationLines;
  isSelected?: boolean;
}

export default function FamilyMember({ member, relationLines, isSelected }: FamilyMemberProps) {
  return (
    <div className={styles.FamilyMember} style={{ width: 50, height: 50 }}>
      {relationLines?.top && <div className={styles.TopRelationLine} />}
      {relationLines?.right && <div className={styles.RightRelationLine} />}
      {relationLines?.left && <div className={styles.LeftRelationLine} />}
      {relationLines?.topLeft && <div className={styles.TopLeftRelationLine} />}
      {relationLines?.bottomLeft && <div className={styles.BottomLeftRelationLine} />}
      <Image src={member.imageSrc} alt={member.name} fill className={styles.Image + (isSelected ? ' ' + styles.Selected : '')} />
      <div className={styles.GenderBadge + ' ' + (member.isMale ? styles.Male : styles.Female)}>{member.isMale ? '♂' : '♀'}</div>
    </div>
  );
}
