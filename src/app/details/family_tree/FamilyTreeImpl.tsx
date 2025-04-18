'use client'

import { useEffect, useRef, useState } from 'react';
import FamilyMember from './components/FamilyMember';
import FamilyMemberData from './FamilyMemberData';
import styles from './FamilyTreeImpl.module.css';

interface FamilyMemberDataWithCoords {
  memberData: FamilyMemberData;
  x: number;
  y: number;
}

interface Props {
  familyTree: FamilyMemberData;
}

export default function FamilyTreeImpl({ familyTree }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [members, setMembers] = useState<FamilyMemberDataWithCoords[]>([]);

  // Position family members
  useEffect(() => {
    if (ref.current == null) {
      return;
    }

    const x = ref.current.clientWidth / 2 - 25;
    const y = ref.current.clientHeight / 2 - 25;

    setMembers(() => [
      {
        memberData: familyTree,
        x,
        y,
      },
    ]);
  }, [familyTree]);

  return (
    <div className={styles.FamilyTree} ref={ref}>
      {members.map((member, i) => (
        <div key={'family-member-' + i} style={{ position: 'absolute', left: member.x, top: member.y }}>
          <FamilyMember member={member.memberData} />
        </div>
      ))}
    </div>
  );
}
