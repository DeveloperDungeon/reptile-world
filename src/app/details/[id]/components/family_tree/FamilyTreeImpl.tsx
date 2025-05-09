'use client'

import useInteraction from '@/app/common/useInteraction';
import FamilyMemberData from '@/app/data/FamilyMemberData';
import { useCallback, useEffect, useRef, useState } from 'react';
import FamilyMember, { FamilyMemberProps } from './FamilyMember';
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
  selectedMateIds: Set<string>,
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
          bottomLeft: selectedMateIds.has(mate.id) && children != null,
        },
        childrenCount: children?.length,
        x: x + MEMBER_SIZE_PX + RELATION_LINE_LENGTH_PX,
        y: y,
      });

      if (selectedMateIds.has(mate.id) && children) {
        let dx = (MEMBER_SIZE_PX + RELATION_LINE_LENGTH_PX) / 2 - (children.length - 1) * (MEMBER_SIZE_PX + RELATION_LINE_LENGTH_PX) / 2;
        let siblingLineLength = 0;
        for (let i = 0; i < children.length; i++) {
          const child = children[i];
          append(membersWithCoords, child, selectedMateIds, x + dx, y + 100, siblingLineLength);

          siblingLineLength = (MEMBER_SIZE_PX + RELATION_LINE_LENGTH_PX) * (1 + (child.mates?.length ?? 0));
          dx += siblingLineLength;
        }
      }

      x += MEMBER_SIZE_PX + RELATION_LINE_LENGTH_PX;
    }
  }
}

function convert(familyTree: FamilyMemberData, selectedMateIds: Set<string>): FamilyMemberDataRenderingProps[] {
  const membersWithCoords: FamilyMemberDataRenderingProps[] = [];

  append(membersWithCoords, familyTree, selectedMateIds, 0, 0, 0);

  return membersWithCoords;
}

export default function FamilyTreeImpl({ familyTree, selectedId }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [members, setMembers] = useState<FamilyMemberDataRenderingProps[]>([]);
  const [translate, setTranslate] = useState<Translate>({ dx: 0, dy: 0 });
  const [selectedMateIds, setSelectedMateIds] = useState<Set<string> | null>(null);
  const interaction = useInteraction(ref);

  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedMateIds == null) {
      const mateIds = new Set<string>();

      function findPathToSelectedId(entity: FamilyMemberData) {
        if (entity.id === selectedId) return true;
        if (!entity.mates) return false;

        for (const mate of entity.mates) {
          if (!mate.children) continue;

          for (const child of mate.children) {
            if (findPathToSelectedId(child)) {
              mateIds.add(mate.mate.id);
              return true;
            }
          }
        }
        return false;
      }

      findPathToSelectedId(familyTree);
      setSelectedMateIds(mateIds);
      return;
    }

    if (ref.current == null) {
      return;
    }

    const members = convert(familyTree, selectedMateIds);
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
  }, [familyTree, selectedId, selectedMateIds]);

  const getOriginalMate = useCallback((mateId: string): FamilyMemberData | null => {
    function find(entity: FamilyMemberData): FamilyMemberData | null {
      if (!entity.mates) return null;

      for (const mate of entity.mates) {
        if (mate.mate.id === mateId) {
          return entity;
        }

        if (!mate.children) continue;

        for (const child of mate.children) {
          const findResult = find(child);
          if (findResult != null) {
            return findResult;
          }
        }
      }
      return null;
    }

    return find(familyTree);
  }, [familyTree]);

  useEffect(() => {
    if (ref.current == null || cursorRef.current == null) return;
    const element = ref.current;
    const cursor = cursorRef.current;

    const onPointerMove = (e: PointerEvent) => {
      const { x, y } = element.getBoundingClientRect();
      cursor.style.left = (e.clientX - x) + 'px';
      cursor.style.top = (e.clientY - y) + 'px';
    };

    const onPointerEnter = () => {
      cursor.style.visibility = 'visible';
    };

    const onPointerLeave = () => {
      cursor.style.visibility = 'hidden';
    };

    element.addEventListener('pointermove', onPointerMove);
    element.addEventListener('pointerenter', onPointerEnter);
    element.addEventListener('pointerleave', onPointerLeave);

    return () => {
      element.removeEventListener('pointermove', onPointerMove);
      element.removeEventListener('pointerenter', onPointerEnter);
      element.removeEventListener('pointerleave', onPointerLeave);
    };
  }, [ref]);

  return (
    <div className={styles.FamilyTree} ref={ref}>
      {members.map((member) => (
        <div key={'family-member-' + member.member.id} style={{
          position: 'absolute',
          left: member.x + translate.dx + interaction.dx,
          top: member.y + translate.dy + interaction.dy,
          transition: interaction.isDragging ? 'none' : 'left 120ms, top 120ms',
        }}>
          <FamilyMember
            member={member}
            size={MEMBER_SIZE_PX}
            isSelected={member.member.id === selectedId}
            isChildrenCountSelected={selectedMateIds?.has(member.member.id) ?? false}
            onChildrenCountSelected={() => {
              setSelectedMateIds((mateIds) => {
                const newMateIds = new Set(mateIds);
                if (newMateIds.has(member.member.id)) {
                  newMateIds.delete(member.member.id);
                } else {
                  const originalMate = getOriginalMate(member.member.id);
                  if (originalMate) {
                    for (const mateId of originalMate.mates?.map((mate) => mate.mate.id) ?? []) {
                      newMateIds.delete(mateId);
                    }
                  }
                  newMateIds.add(member.member.id);
                }
                return newMateIds;
              });
            }} />
        </div>
      ))}
      <div className={styles.Cursor} ref={cursorRef} style={{ visibility: 'hidden' }} />
    </div>
  );
}
