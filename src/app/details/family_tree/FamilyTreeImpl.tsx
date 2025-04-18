'use client'

import { useEffect, useRef, useState } from 'react';
import FamilyMember from './FamilyMember';
import FamilyMemberData from './FamilyMemberData';
import styles from './FamilyTreeImpl.module.css';

interface FamilyMemberDataWithCoords {
  memberData: FamilyMemberData;
  x: number;
  y: number;
}

export default function FamilyTreeImpl() {
  const ref = useRef<HTMLDivElement>(null);
  const [members, setMembers] = useState<FamilyMemberDataWithCoords[]>([]);

  // Position family members
  useEffect(() => {
    if (ref.current == null) {
      return;
    }

    const x = ref.current.clientWidth / 2 - 25;
    const y = ref.current.clientHeight / 2 - 25;

    setMembers(() => [{
      memberData: {
        name: '게코',
        imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgwy1dOJa3-jpTfRxBmXG6-u-R8IzkG_AGlKLgesk_M2I1i3K4FMA0ZWqAI5HUpZXtqmG2hhfooARUr7r8wa--VA',
      },
      x,
      y,
    },
    ]);
  }, []);

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
