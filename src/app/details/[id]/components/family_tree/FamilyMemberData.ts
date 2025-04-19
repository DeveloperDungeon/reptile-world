export default interface FamilyMemberData {
  id: string;

  name: string;
  isMale: boolean;
  imageSrc: string;

  mates?: {
    mate: FamilyMemberData;
    children?: FamilyMemberData[];
  }[];
}
