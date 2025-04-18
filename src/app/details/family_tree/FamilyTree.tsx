import { DUMMY_FAMILY_TREES } from './dummy_family_trees';
import FamilyMemberData from './FamilyMemberData';
import FamilyTreeImpl from './FamilyTreeImpl';

async function fetchFamilyTree(id: string): Promise<FamilyMemberData> {
  const idNumber = Number(id);
  return DUMMY_FAMILY_TREES[idNumber - 1];
}

interface Props {
  id: string;
}

export default async function FamilyTree({ id }: Props) {
  const familyTree = await fetchFamilyTree(id);
  return <FamilyTreeImpl familyTree={familyTree} selectedId={id} />
}
