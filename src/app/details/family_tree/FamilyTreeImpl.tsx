'use client'

import { useRouter } from 'next/navigation';
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
  selectedId: string;
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

export default function FamilyTreeImpl({ familyTree, selectedId }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [members, setMembers] = useState<FamilyMemberDataRenderingProps[]>([]);
  const [translate, setTranslate] = useState<Translate>({ dx: 0, dy: 0 });
  const [selectedMate, setSelectedMate] = useState<FamilyMemberData | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (ref.current == null) {
      return;
    }

    const members = convert(familyTree, selectedMate);
    setMembers(() => members);
  }, [familyTree, selectedMate]);

  // Position family members
  useEffect(() => {
    if (ref.current == null) {
      return;
    }

    const minX = Math.min(...members.map((member) => member.x));
    const maxX = Math.max(...members.map((member) => member.x));
    const centerX = (minX + maxX) / 2;

    const minY = Math.min(...members.map((member) => member.y));
    const maxY = Math.max(...members.map((member) => member.y));
    const centerY = (minY + maxY) / 2;

    setTranslate({
      dx: ref.current.clientWidth / 2 - MEMBER_SIZE_PX / 2 - centerX,
      dy: ref.current.clientHeight / 2 - MEMBER_SIZE_PX / 2 - centerY,
    });
  }, [familyTree, members]);

  return (
    <div className={styles.FamilyTree} ref={ref}>
      {members.map((member) => (
        <div key={'family-member-' + member.member.name} style={{
          position: 'absolute',
          left: member.x + translate.dx,
          top: member.y + translate.dy,
          transition: 'left 120ms, top 120ms',
        }}>
          <FamilyMember
            member={member}
            size={MEMBER_SIZE_PX}
            onSelect={() => {
              router.push(`/details/${member.member.id}`);
            }}
            isChildrenCountSelected={member.member === selectedMate}
            onChildrenCountSelected={() => {
              setSelectedMate((mate) => {
                if (mate === member.member) {
                  return null;
                }
                return member.member;
              });
            }} />
        </div>
      ))}
    </div>
  );
}
