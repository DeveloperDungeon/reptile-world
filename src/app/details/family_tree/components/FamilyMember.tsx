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
  childrenCount?: number;
}

interface Props {
  member: FamilyMemberProps;
  size: number;
  isSelected: boolean;
  onSelect: () => void;
  isChildrenCountSelected: boolean;
  onChildrenCountSelected: () => void;
}

export default function FamilyMember({
  member: { member, relationLines, childrenCount },
  size,
  isSelected,
  onSelect,
  isChildrenCountSelected,
  onChildrenCountSelected }: Props) {
  return (
    <div className={styles.FamilyMember} style={{ width: size, height: size }}>
      {relationLines?.top && <div className={styles.TopRelationLine} />}
      {relationLines?.right && <div className={styles.RightRelationLine} />}
      {relationLines?.left && <div className={styles.LeftRelationLine} />}
      {relationLines?.topLeft && <div className={styles.TopLeftRelationLine} />}
      {relationLines?.bottomLeft && <div className={styles.BottomLeftRelationLine} />}
      <Image src={member.imageSrc} alt={member.name} fill className={styles.Image + (isSelected ? ' ' + styles.Selected : '')} onClick={onSelect} />
      <div className={styles.GenderBadge + ' ' + (member.isMale ? styles.Male : styles.Female)}>{member.isMale ? '♂' : '♀'}</div>
      {childrenCount && <div
        className={styles.ChildrenCount + (isChildrenCountSelected ? ' ' + styles.Selected : '')}
        onClick={onChildrenCountSelected}>
        {childrenCount}
      </div>}
    </div>
  );
}
