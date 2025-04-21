export default interface BreederData {
  id: string;
  name: string;
  imageSrc: string;
  description?: string;
  facts?: {
    fact: string;
    value: string;
  }[];
}
