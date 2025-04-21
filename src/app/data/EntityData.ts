export default interface EntityData {
  id: string;
  name: string;
  species: string;
  gender: 'MALE' | 'FEMALE' | 'UNKNOWN';
  description: string;
  imageSrc: string;
}
