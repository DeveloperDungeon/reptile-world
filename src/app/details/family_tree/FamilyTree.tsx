import FamilyMemberData from './FamilyMemberData';
import FamilyTreeImpl from './FamilyTreeImpl';

async function fetchFamilyTree(): Promise<FamilyMemberData> {
  return {
    imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgwy1dOJa3-jpTfRxBmXG6-u-R8IzkG_AGlKLgesk_M2I1i3K4FMA0ZWqAI5HUpZXtqmG2hhfooARUr7r8wa--VA',
    name: '게코',
  };
}

export default async function FamilyTree() {
  const familyTree = await fetchFamilyTree();
  return <FamilyTreeImpl familyTree={familyTree} />
}
