import FamilyMemberData from './FamilyMemberData';
import FamilyTreeImpl from './FamilyTreeImpl';

async function fetchFamilyTree(): Promise<FamilyMemberData> {
  return {
    id: '1',
    imageSrc: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgwy1dOJa3-jpTfRxBmXG6-u-R8IzkG_AGlKLgesk_M2I1i3K4FMA0ZWqAI5HUpZXtqmG2hhfooARUr7r8wa--VA',
    name: '게코',
    isMale: true,
    mates: [
      {
        mate: {
          id: '2',
          imageSrc: 'https://jonathansjungleroadshow.co.uk/wp-content/uploads/2020/07/crestedgeckos5.jpg',
          name: '게코 와이프 1',
          isMale: false,
        },
        children: [
          {
            id: '3',
            imageSrc: 'https://zooboise.org/wp-content/uploads/2024/05/2024-Crested-gecko-block.png',
            name: '게코 1-1',
            isMale: true,
          },
          {
            id: '4',
            imageSrc: 'https://www.reptiles.swelluk.com/media/catalog/product/c/r/crested_gecko_correlophus_ciliatus.jpg?width=810&height=810&store=swell_reptiles_store_view&image-type=image',
            name: '게코 1-2',
            isMale: false,
          },
          {
            id: '5',
            imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3u6sJjAXFVCMI-2ye5DUo0eG8JjyrnvSsTsSzXbLSc8hH6Exs8RNFtQZlhSKcS-jP04c&usqp=CAU',
            name: '게코 1-3',
            isMale: true,
          },
        ],
      },
      {
        mate: {
          id: '6',
          imageSrc: 'https://www.reptilecentre.com/cdn/shop/articles/what_do_geckos_eat.png?v=1723822970',
          name: '게코 와이프 2',
          isMale: false,
        },
        children: [
          {
            id: '7',
            imageSrc: 'https://www.wilbanksreptiles.com/cdn/shop/collections/BrowseCrestedGeckos.jpg?v=1711131817',
            name: '게코 2-1',
            isMale: false,
          },
        ],
      },
      {
        mate: {
          id: '8',
          imageSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4bBWj5M_BSvAh1xXwB4v0dBG1sdyNza5GE1ZK2kxSdGfPDIYZmD4QMeYPS0fFNRMWdI&usqp=CAU',
          name: '게코 와이프 3',
          isMale: false,
        },
        children: [
          {
            id: '9',
            imageSrc: 'https://i0.wp.com/badgerlandrescue.com/wp-content/uploads/ToBeSorted/360_F_61097391_ynTSjFhpcXEhJCnRE7YJyG33lvBUKCO8.jpg?resize=540%2C360&ssl=1',
            name: '게코 3-1',
            isMale: true,
          },
          {
            id: '10',
            imageSrc: 'https://www.reptilecentre.com/cdn/shop/articles/what_do_geckos_eat.png?v=1723822970',
            name: '게코 3-2',
            isMale: true,
          },
        ],
      },
    ],
  };
}

interface Props {
  id: string;
}

export default async function FamilyTree({ id }: Props) {
  const familyTree = await fetchFamilyTree();
  return <FamilyTreeImpl familyTree={familyTree} selectedId={id} />
}
