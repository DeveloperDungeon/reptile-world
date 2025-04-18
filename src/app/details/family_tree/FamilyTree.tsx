import FamilyMemberData from './FamilyMemberData';
import FamilyTreeImpl from './FamilyTreeImpl';

async function fetchFamilyTree(): Promise<FamilyMemberData> {
  return {
    imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgwy1dOJa3-jpTfRxBmXG6-u-R8IzkG_AGlKLgesk_M2I1i3K4FMA0ZWqAI5HUpZXtqmG2hhfooARUr7r8wa--VA',
    name: '게코',
    isMale: true,
    mates: [
      {
        mate: {
          imageSrc: 'https://jonathansjungleroadshow.co.uk/wp-content/uploads/2020/07/crestedgeckos5.jpg',
          name: '게코 와이프 1',
          isMale: false,
        },
      },
      {
        mate: {
          imageSrc: 'https://www.reptilecentre.com/cdn/shop/articles/what_do_geckos_eat.png?v=1723822970',
          name: '게코 와이프 2',
          isMale: false,
        },
      },
    ],
  };
}

export default async function FamilyTree() {
  const familyTree = await fetchFamilyTree();
  return <FamilyTreeImpl familyTree={familyTree} />
}
