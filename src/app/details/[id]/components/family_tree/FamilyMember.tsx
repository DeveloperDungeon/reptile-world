import FamilyMemberData from '@/app/data/FamilyMemberData';
import Image from 'next/image';
import Link from 'next/link';
import styles from './FamilyMember.module.css';

interface RelationLines {
  // Used to connect with parents.
  top?: boolean;
  // Used to connect with a couple female.
  right?: boolean;
  // Used to connect with a couple male.
  left?: boolean;
  // Used to connect with left sibling.
  siblingLineLength?: number;
  // Used to connect with children.
  bottomLeft?: boolean;
}

export interface FamilyMemberProps {
  member: FamilyMemberData;
  relationLines?: RelationLines;
  childrenCount?: number;
}

interface Props {
  member: FamilyMemberProps;
  size: number;
  isSelected: boolean;
  isChildrenCountSelected: boolean;
  onChildrenCountSelected: () => void;
}

export default function FamilyMember({
  member: { member, relationLines, childrenCount },
  size,
  isSelected,
  isChildrenCountSelected,
  onChildrenCountSelected }: Props) {
  return (
    <div className={styles.FamilyMember} style={{ width: size, height: size }}>
      {relationLines?.top && <div className={styles.TopRelationLine} />}
      {relationLines?.right && <div className={styles.RightRelationLine} />}
      {relationLines?.left && <div className={styles.LeftRelationLine} />}
      <div className={styles.TopLeftRelationLine} style={{ width: relationLines?.siblingLineLength ?? 0 }} />
      {relationLines?.bottomLeft && <div className={styles.BottomLeftRelationLine} />}
      <Link href={`/details/${member.id}`}>
        <Image src={member.imageSrc} alt={member.name} fill className={styles.Image + (isSelected ? ' ' + styles.Selected : '')} priority />
      </Link>
      <div
        className={styles.GenderBadge + ' ' +
          (member.gender === 'MALE' ? styles.Male : styles.Female)}>
        {member.gender === 'MALE' ? '♂' : '♀'}
      </div>
      {childrenCount && <div
        className={styles.ChildrenCount + (isChildrenCountSelected ? ' ' + styles.Selected : '')}
        onClick={onChildrenCountSelected}>
        {childrenCount}
      </div>}
    </div>
  );
}
