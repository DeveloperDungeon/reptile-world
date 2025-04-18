'use client'

import { useEffect, useRef, useState } from 'react';
import FamilyMember, { FamilyMemberProps } from './components/FamilyMember';
import FamilyMemberData from './FamilyMemberData';
import styles from './FamilyTreeImpl.module.css';

interface FamilyMemberDataRenderingProps extends FamilyMemberProps {
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

function convert(familyTree: FamilyMemberData): FamilyMemberDataRenderingProps[] {
  const membersWithCoords: FamilyMemberDataRenderingProps[] = [
    {
      member: familyTree,
      x: 0,
      y: 0,
      isSelected: true,
    },
  ];

  if (familyTree.mates) {
    let x = 0;
    let y = 0;

    for (const { mate, children } of familyTree.mates) {
      membersWithCoords.push({
        member: mate,
        relationLines: {
          left: true,
          bottomLeft: children != null,
        },
        x: x + 80,
        y: 0,
      });

      if (children) {
        let dx = 40 - (children.length - 1) * 40;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          membersWithCoords.push({
            member: child,
            relationLines: {
              top: true,
              topLeft: i > 0,
            },
            x: x + dx,
            y: 100,
          });
          dx += 80;
        }
      }

      x += 80;
    }
  }

  return membersWithCoords;
}

export default function FamilyTreeImpl({ familyTree }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [members, setMembers] = useState<FamilyMemberDataRenderingProps[]>([]);
  const [translate, setTranslate] = useState<Translate>({ dx: 0, dy: 0 });

  // Position family members
  useEffect(() => {
    if (ref.current == null) {
      return;
    }

    const members = convert(familyTree);
    setMembers(() => members);

    const selected = members.find((memberWithCoord) => memberWithCoord.member === familyTree);
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
          <FamilyMember member={member.member} relationLines={member.relationLines} isSelected={member.isSelected} />
        </div>
      ))}
    </div>
  );
}
