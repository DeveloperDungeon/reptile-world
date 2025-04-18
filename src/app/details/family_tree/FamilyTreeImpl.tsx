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

function append(
  membersWithCoords: FamilyMemberDataRenderingProps[],
  entity: FamilyMemberData,
  selectedMateId: string | null,
  x: number,
  y: number,
  siblingLineLength: number) {
  membersWithCoords.push({
    member: entity,
    x,
    y,
    relationLines: {
      top: y > 0,
      siblingLineLength,
    },
  });

  if (entity.mates) {
    for (const { mate, children } of entity.mates) {
      membersWithCoords.push({
        member: mate,
        relationLines: {
          left: true,
          bottomLeft: mate.id === selectedMateId && children != null,
        },
        childrenCount: children?.length,
        x: x + MEMBER_SIZE_PX + RELATION_LINE_LENGTH_PX,
        y: y,
      });

      if (mate.id === selectedMateId && children) {
        let dx = (MEMBER_SIZE_PX + RELATION_LINE_LENGTH_PX) / 2 - (children.length - 1) * (MEMBER_SIZE_PX + RELATION_LINE_LENGTH_PX) / 2;
        let siblingLineLength = 0;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          append(membersWithCoords, child, selectedMateId, x + dx, y + 100, siblingLineLength);

          siblingLineLength = (MEMBER_SIZE_PX + RELATION_LINE_LENGTH_PX) * (1 + (child.mates?.length ?? 0));
          dx += siblingLineLength;
        }
      }

      x += MEMBER_SIZE_PX + RELATION_LINE_LENGTH_PX;
    }
  }
}

function convert(familyTree: FamilyMemberData, selectedMateId: string | null): FamilyMemberDataRenderingProps[] {
  const membersWithCoords: FamilyMemberDataRenderingProps[] = [];

  append(membersWithCoords, familyTree, selectedMateId, 0, 0, 0);

  return membersWithCoords;
}

export default function FamilyTreeImpl({ familyTree, selectedId }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [members, setMembers] = useState<FamilyMemberDataRenderingProps[]>([]);
  const [translate, setTranslate] = useState<Translate>({ dx: 0, dy: 0 });
  const [selectedMateId, setSelectedMateId] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (ref.current == null) {
      return;
    }

    const members = convert(familyTree, selectedMateId);
    setMembers(() => members);

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
  }, [familyTree, selectedMateId]);

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
            isSelected={member.member.id === selectedId}
            onSelect={() => {
              router.push(`/details/${member.member.id}`);
            }}
            isChildrenCountSelected={member.member.id === selectedMateId}
            onChildrenCountSelected={() => {
              setSelectedMateId((mateId) => {
                if (mateId === member.member.id) {
                  return null;
                }
                return member.member.id;
              });
            }} />
        </div>
      ))}
    </div>
  );
}
