import EntityData from './EntityData';

export default interface FamilyMemberData extends EntityData {
  mates?: {
    mate: FamilyMemberData;
    children?: FamilyMemberData[];
  }[];
}
