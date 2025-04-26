import FamilyMemberData from '@/app/data/FamilyMemberData';
import {
  DUMMY_FEMALE_1,
  DUMMY_FEMALE_2,
  DUMMY_FEMALE_3,
  DUMMY_FEMALE_4,
  DUMMY_FEMALE_5,
  DUMMY_FEMALE_6,
  DUMMY_FEMALE_7,
  DUMMY_FEMALE_8,
  DUMMY_FEMALE_9,
  DUMMY_FEMALE_10,
  DUMMY_MALE_1,
  DUMMY_MALE_2,
  DUMMY_MALE_3,
  DUMMY_MALE_4,
  DUMMY_MALE_5,
  DUMMY_MALE_6,
  DUMMY_MALE_7,
  DUMMY_MALE_8,
  DUMMY_MALE_9,
  DUMMY_MALE_10,
  DUMMY_UNKNOWN_1,
} from '@/app/dummy/dummy_entities';

export const DUMMY_FAMILY_TREES: FamilyMemberData[] = [
  // id: HayunbrandgeckoM00000001
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
                children: [DUMMY_MALE_4, DUMMY_UNKNOWN_1],
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
  // id: HayunbrandgeckoM00000002
  {
    ...DUMMY_MALE_1,
    mates: [
      {
        mate: DUMMY_FEMALE_1,
        children: [DUMMY_MALE_2, DUMMY_MALE_3, DUMMY_FEMALE_2],
      },
    ],
  },
  // id: HayunbrandgeckoM00000003
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
                children: [DUMMY_MALE_4, DUMMY_UNKNOWN_1],
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
  // id: HayunbrandgeckoM00000004
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
                children: [DUMMY_MALE_4, DUMMY_UNKNOWN_1],
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
  // id: HayunbrandgeckoM00000005
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
                children: [DUMMY_MALE_4, DUMMY_UNKNOWN_1],
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
  // id: HayunbrandgeckoF00000001
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
                children: [DUMMY_MALE_4, DUMMY_UNKNOWN_1],
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
  // id: HayunbrandgeckoF00000002
  {
    ...DUMMY_MALE_1,
    mates: [
      {
        mate: DUMMY_FEMALE_1,
        children: [DUMMY_MALE_2, DUMMY_MALE_3, DUMMY_FEMALE_2],
      },
    ],
  },
  // id: HayunbrandgeckoF00000003
  {
    ...DUMMY_FEMALE_3,
    mates: [
      {
        mate: DUMMY_MALE_3,
        children: [DUMMY_MALE_4, DUMMY_UNKNOWN_1],
      },
    ],
  },
  // id: HayunbrandgeckoF00000004
  {
    ...DUMMY_FEMALE_4,
    mates: [
      {
        mate: DUMMY_MALE_3,
        children: [DUMMY_MALE_5],
      },
    ],
  },
  // id: HayunbrandgeckoF00000005
  {
    ...DUMMY_FEMALE_5,
    mates: [
      {
        mate: DUMMY_MALE_3,
      },
    ],
  },
  // id: HayunbrandgeckoU00000001
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
                children: [DUMMY_MALE_4, DUMMY_UNKNOWN_1],
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
  
  //id:HayunbrandgeckoM00000006
  DUMMY_MALE_6,
  //id:HayunbrandgeckoM00000007
  DUMMY_MALE_7,
  //id:HayunbrandgeckoM00000008
  DUMMY_MALE_8,
  //id:HayunbrandgeckoM00000009
  DUMMY_MALE_9,
  //id:HayunbrandgeckoM00000010
  DUMMY_MALE_10,
  //id:HayunbrandgeckoF00000006
  DUMMY_FEMALE_6,
  //id:HayunbrandgeckoF00000007
  DUMMY_FEMALE_7,
  //id:HayunbrandgeckoF00000008
  DUMMY_FEMALE_8,
  //id:HayunbrandgeckoF00000009
  DUMMY_FEMALE_9,
  //id:HayunbrandgeckoF00000010
  DUMMY_FEMALE_10
  
];
