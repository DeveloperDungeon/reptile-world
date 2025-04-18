'use client'

import { useEffect, useRef, useState } from 'react';
import FamilyMember, { FamilyMemberProps } from './components/FamilyMember';
import FamilyMemberData from './FamilyMemberData';
import styles from './FamilyTreeImpl.module.css';

const MEMBER_SIZE_PX = 50;
const RELATION_LINE_LENGTH_PX = 40;

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

function convert(familyTree: FamilyMemberData, selectedMate: FamilyMemberData | null): FamilyMemberDataRenderingProps[] {
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
          bottomLeft: mate === selectedMate && children != null,
        },
        childrenCount: children?.length,
        x: x + MEMBER_SIZE_PX + RELATION_LINE_LENGTH_PX,
        y: 0,
      });

      if (mate === selectedMate && children) {
        let dx = (MEMBER_SIZE_PX + RELATION_LINE_LENGTH_PX) / 2 - (children.length - 1) * (MEMBER_SIZE_PX + RELATION_LINE_LENGTH_PX) / 2;
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
          dx += MEMBER_SIZE_PX + RELATION_LINE_LENGTH_PX;
        }
      }

      x += MEMBER_SIZE_PX + RELATION_LINE_LENGTH_PX;
    }
  }

  return membersWithCoords;
}

export default function FamilyTreeImpl({ familyTree }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [members, setMembers] = useState<FamilyMemberDataRenderingProps[]>([]);
  const [translate, setTranslate] = useState<Translate>({ dx: 0, dy: 0 });
  const [selectedMate, setSelectedMate] = useState<FamilyMemberData | null>(null);

  // Position family members
  useEffect(() => {
    if (ref.current == null) {
      return;
    }

    const members = convert(familyTree, selectedMate);
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
  }, [familyTree, selectedMate]);

  return (
    <div className={styles.FamilyTree} ref={ref}>
      {members.map((member, i) => (
        <div key={'family-member-' + i} style={{ position: 'absolute', left: member.x + translate.dx, top: member.y + translate.dy }}>
          <FamilyMember member={member} size={MEMBER_SIZE_PX} />
        </div>
      ))}
    </div>
  );
}
