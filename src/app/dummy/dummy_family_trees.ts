import FamilyMemberData from '@/app/data/FamilyMemberData';
import {
  DUMMY_FEMALE_1,
  DUMMY_FEMALE_2,
  DUMMY_FEMALE_3,
  DUMMY_FEMALE_4,
  DUMMY_FEMALE_5,
  DUMMY_MALE_1,
  DUMMY_MALE_2,
  DUMMY_MALE_3,
  DUMMY_MALE_4,
  DUMMY_MALE_5,
  DUMMY_UNKNOWN_1,
} from '@/app/dummy/dummy_entities';

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
        children: [DUMMY_MALE_4, DUMMY_UNKNOWN_1],
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
  // id: 11
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
