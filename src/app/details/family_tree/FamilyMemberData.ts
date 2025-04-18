export default interface FamilyMemberData {
  name: string;
  imageSrc: string;

  isMale: boolean;

  mates?: {
    mate: FamilyMemberData;
    children?: FamilyMemberData[];
  }[];
}
