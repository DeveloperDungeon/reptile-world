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

interface Translate {
  dx: number;
  dy: number;
}

function convert(familyTree: FamilyMemberData): FamilyMemberDataWithCoords[] {
  return [
    {
      memberData: familyTree,
      x: 0,
      y: 0,
    },
  ];
}

export default function FamilyTreeImpl({ familyTree }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [members, setMembers] = useState<FamilyMemberDataWithCoords[]>([]);
  const [translate, setTranslate] = useState<Translate>({ dx: 0, dy: 0 });

  // Position family members
  useEffect(() => {
    if (ref.current == null) {
      return;
    }

    const members = convert(familyTree);
    setMembers(() => members);

    const selected = members.find((memberWithCoord) => memberWithCoord.memberData === familyTree);
    if (selected == null) {
      return;
    }

    const centerX = ref.current.clientWidth / 2 - 25;
    const centerY = ref.current.clientHeight / 2 - 25;

    setTranslate({
      dx: centerX - selected.x,
      dy: centerY - selected.y,
    });
  }, [familyTree]);

  return (
    <div className={styles.FamilyTree} ref={ref}>
      {members.map((member, i) => (
        <div key={'family-member-' + i} style={{ position: 'absolute', left: member.x + translate.dx, top: member.y + translate.dy }}>
          <FamilyMember member={member.memberData} />
        </div>
      ))}
    </div>
  );
}
