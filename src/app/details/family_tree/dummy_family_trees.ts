import FamilyMemberData from './FamilyMemberData';

const DUMMY_MALE_1: FamilyMemberData = {
  id: '1',
  imageSrc:
    'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSgwy1dOJa3-jpTfRxBmXG6-u-R8IzkG_AGlKLgesk_M2I1i3K4FMA0ZWqAI5HUpZXtqmG2hhfooARUr7r8wa--VA',
  name: '게코 수컷 1',
  isMale: true,
};

const DUMMY_MALE_2: FamilyMemberData = {
  id: '2',
  imageSrc:
    'https://zooboise.org/wp-content/uploads/2024/05/2024-Crested-gecko-block.png',
  name: '게코 수컷 2',
  isMale: true,
};

const DUMMY_MALE_3: FamilyMemberData = {
  id: '3',
  imageSrc:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3u6sJjAXFVCMI-2ye5DUo0eG8JjyrnvSsTsSzXbLSc8hH6Exs8RNFtQZlhSKcS-jP04c&usqp=CAU',
  name: '게코 수컷 3',
  isMale: true,
};

const DUMMY_MALE_4: FamilyMemberData = {
  id: '4',
  imageSrc:
    'https://i0.wp.com/badgerlandrescue.com/wp-content/uploads/ToBeSorted/360_F_61097391_ynTSjFhpcXEhJCnRE7YJyG33lvBUKCO8.jpg?resize=540%2C360&ssl=1',
  name: '게코 수컷 4',
  isMale: true,
};

const DUMMY_MALE_5: FamilyMemberData = {
  id: '5',
  imageSrc:
    'https://www.reptilecentre.com/cdn/shop/articles/what_do_geckos_eat.png?v=1723822970',
  name: '게코 수컷 5',
  isMale: true,
};

const DUMMY_FEMALE_1: FamilyMemberData = {
  id: '6',
  imageSrc:
    'https://jonathansjungleroadshow.co.uk/wp-content/uploads/2020/07/crestedgeckos5.jpg',
  name: '게코 암컷 1',
  isMale: false,
};

const DUMMY_FEMALE_2: FamilyMemberData = {
  id: '7',
  imageSrc:
    'https://www.reptiles.swelluk.com/media/catalog/product/c/r/crested_gecko_correlophus_ciliatus.jpg?width=810&height=810&store=swell_reptiles_store_view&image-type=image',
  name: '게코 암컷 2',
  isMale: false,
};

const DUMMY_FEMALE_3: FamilyMemberData = {
  id: '8',
  imageSrc:
    'https://www.reptilecentre.com/cdn/shop/articles/what_do_geckos_eat.png?v=1723822970',
  name: '게코 암컷 3',
  isMale: false,
};

const DUMMY_FEMALE_4: FamilyMemberData = {
  id: '9',
  imageSrc:
    'https://www.wilbanksreptiles.com/cdn/shop/collections/BrowseCrestedGeckos.jpg?v=1711131817',
  name: '게코 암컷 4',
  isMale: false,
};

const DUMMY_FEMALE_5: FamilyMemberData = {
  id: '10',
  imageSrc:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh4bBWj5M_BSvAh1xXwB4v0dBG1sdyNza5GE1ZK2kxSdGfPDIYZmD4QMeYPS0fFNRMWdI&usqp=CAU',
  name: '게코 암컷 5',
  isMale: false,
};

export const DUMMY_FAMILY_TREES: FamilyMemberData[] = [
  // id: 1
  {
    ...DUMMY_MALE_1,
    mates: [
      {
        mate: DUMMY_FEMALE_1,
        children: [
          DUMMY_MALE_2,
          {
            ...DUMMY_MALE_3,
            mates: [
              {
                mate: DUMMY_FEMALE_3,
                children: [DUMMY_MALE_4],
              },
              {
                mate: DUMMY_FEMALE_4,
                children: [DUMMY_MALE_5],
              },
              {
                mate: DUMMY_FEMALE_5,
              },
            ],
          },
          DUMMY_FEMALE_2,
        ],
      },
    ],
  },
  // id: 2
  {
    ...DUMMY_MALE_1,
    mates: [
      {
        mate: DUMMY_FEMALE_1,
        children: [DUMMY_MALE_2, DUMMY_MALE_3, DUMMY_FEMALE_2],
      },
    ],
  },
  // id: 3
  {
    ...DUMMY_MALE_1,
    mates: [
      {
        mate: DUMMY_FEMALE_1,
        children: [
          DUMMY_MALE_2,
          {
            ...DUMMY_MALE_3,
            mates: [
              {
                mate: DUMMY_FEMALE_3,
                children: [DUMMY_MALE_4],
              },
              {
                mate: DUMMY_FEMALE_4,
                children: [DUMMY_MALE_5],
              },
              {
                mate: DUMMY_FEMALE_5,
              },
            ],
          },
          DUMMY_FEMALE_2,
        ],
      },
    ],
  },
  // id: 4
  {
    ...DUMMY_MALE_1,
    mates: [
      {
        mate: DUMMY_FEMALE_1,
        children: [
          DUMMY_MALE_2,
          {
            ...DUMMY_MALE_3,
            mates: [
              {
                mate: DUMMY_FEMALE_3,
                children: [DUMMY_MALE_4],
              },
              {
                mate: DUMMY_FEMALE_4,
                children: [DUMMY_MALE_5],
              },
              {
                mate: DUMMY_FEMALE_5,
              },
            ],
          },
          DUMMY_FEMALE_2,
        ],
      },
    ],
  },
  // id: 5
  {
    ...DUMMY_MALE_1,
    mates: [
      {
        mate: DUMMY_FEMALE_1,
        children: [
          DUMMY_MALE_2,
          {
            ...DUMMY_MALE_3,
            mates: [
              {
                mate: DUMMY_FEMALE_3,
                children: [DUMMY_MALE_4],
              },
              {
                mate: DUMMY_FEMALE_4,
                children: [DUMMY_MALE_5],
              },
              {
                mate: DUMMY_FEMALE_5,
              },
            ],
          },
          DUMMY_FEMALE_2,
        ],
      },
    ],
  },
  // id: 6
  {
    ...DUMMY_FEMALE_1,
    mates: [
      {
        mate: DUMMY_MALE_1,
        children: [
          DUMMY_MALE_2,
          {
            ...DUMMY_MALE_3,
            mates: [
              {
                mate: DUMMY_FEMALE_3,
                children: [DUMMY_MALE_4],
              },
              {
                mate: DUMMY_FEMALE_4,
                children: [DUMMY_MALE_5],
              },
              {
                mate: DUMMY_FEMALE_5,
              },
            ],
          },
          DUMMY_FEMALE_2,
        ],
      },
    ],
  },
  // id: 7
  {
    ...DUMMY_MALE_1,
    mates: [
      {
        mate: DUMMY_FEMALE_1,
        children: [DUMMY_MALE_2, DUMMY_MALE_3, DUMMY_FEMALE_2],
      },
    ],
  },
  // id: 8
  {
    ...DUMMY_FEMALE_3,
    mates: [
      {
        mate: DUMMY_MALE_3,
        children: [DUMMY_MALE_4],
      },
    ],
  },
  // id: 9
  {
    ...DUMMY_FEMALE_4,
    mates: [
      {
        mate: DUMMY_MALE_3,
        children: [DUMMY_MALE_5],
      },
    ],
  },
  // id: 10
  {
    ...DUMMY_FEMALE_5,
    mates: [
      {
        mate: DUMMY_MALE_3,
      },
    ],
  },
];
