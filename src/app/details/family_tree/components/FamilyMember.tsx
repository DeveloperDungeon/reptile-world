import Image from 'next/image';
import FamilyMemberData from '../FamilyMemberData';
import styles from './FamilyMember.module.css';

interface Props {
  member: FamilyMemberData;
}

export default function FamilyMember({ member }: Props) {
  return (
    <div className={styles.FamilyMember} style={{ width: 50, height: 50 }}>
      <Image src={member.imageSrc} alt={member.name} fill />
    </div>
  );
}
