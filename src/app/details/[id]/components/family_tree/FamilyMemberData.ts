export default interface FamilyMemberData {
  id: string;

  name: string;
  gender: string;
  imageSrc: string;
  description: string;

  mates?: {
    mate: FamilyMemberData;
    children?: FamilyMemberData[];
  }[];
}
