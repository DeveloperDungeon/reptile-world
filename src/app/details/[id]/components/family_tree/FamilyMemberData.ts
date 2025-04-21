export default interface FamilyMemberData {
  id: string;

  name: string;
  gender: string;
  imageSrc: string;
  species: string;
  description: string;

  mates?: {
    mate: FamilyMemberData;
    children?: FamilyMemberData[];
  }[];
}
