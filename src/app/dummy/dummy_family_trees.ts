import FamilyMemberData from '@/app/data/FamilyMemberData';
import {
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
  DUMMY_UNKNOWN_1,
} from '@/app/dummy/dummy_entities';

export const DUMMY_FAMILY_TREES: FamilyMemberData[] = [
  // id: HayunbrndCGM00000001
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
  // id: HayunbrndCGM00000002
  {
    ...DUMMY_MALE_1,
    mates: [
      {
        mate: DUMMY_FEMALE_1,
        children: [DUMMY_MALE_2, DUMMY_MALE_3, DUMMY_FEMALE_2],
      },
    ],
  },
  // id: HayunbrndCGM00000003
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
  // id: HayunbrndCGM00000004
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
  // id: HayunbrndCGM00000005
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
  //id:HayunbrndCGM00000006
  DUMMY_MALE_6,
  //id:HayunbrndCGM00000007
  DUMMY_MALE_7,
  //id:HayunbrndCGM00000008
  DUMMY_MALE_8,
  //id:HayunbrndCGM00000009
  DUMMY_MALE_9,
  //id:HayunbrndCGM00000010
  DUMMY_MALE_10,
  
  // id: HayunbrndCGF00000001
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
  // id: HayunbrndCGF00000002
  {
    ...DUMMY_MALE_1,
    mates: [
      {
        mate: DUMMY_FEMALE_1,
        children: [DUMMY_MALE_2, DUMMY_MALE_3, DUMMY_FEMALE_2],
      },
    ],
  },
  // id: HayunbrndCGF00000003
  {
    ...DUMMY_FEMALE_3,
    mates: [
      {
        mate: DUMMY_MALE_3,
        children: [DUMMY_MALE_4, DUMMY_UNKNOWN_1],
      },
    ],
  },
  // id: HayunbrndCGF00000004
  {
    ...DUMMY_FEMALE_4,
    mates: [
      {
        mate: DUMMY_MALE_3,
        children: [DUMMY_MALE_5],
      },
    ],
  },
  // id: HayunbrndCGF00000005
  {
    ...DUMMY_FEMALE_5,
    mates: [
      {
        mate: DUMMY_MALE_3,
      },
    ],
  },
  //id:HayunbrndCGF00000006
  DUMMY_FEMALE_6,
  //id:HayunbrndCGF00000007
  DUMMY_FEMALE_7,
  //id:HayunbrndCGF00000008
  DUMMY_FEMALE_8,
  //id:HayunbrndCGF00000009
  DUMMY_FEMALE_9,
  //id:HayunbrndCGF00000010
  DUMMY_FEMALE_10,
  // id:HayunbrndCGU00000001
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
  
  
];
