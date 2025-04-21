export default interface FamilyMemberData {
  id: string;

  name: string;
  gender: string;
  imageSrc: string;

  mates?: {
    mate: FamilyMemberData;
    children?: FamilyMemberData[];
  }[];
}
