// https://github.com/DeveloperDungeon/reptile-world/wiki/EntityData

export default interface EntityData {
  id: string;
  name: string;
  species: string;
  gender: 'MALE' | 'FEMALE' | 'UNKNOWN';
  description: string;
  imageSrc: string;
  details?: EntityDetails;
}

interface EntityDetails {
  size?: {
    minMm: number;
    maxMm: number;
  };
  lifespan?: {
    minDays: number;
    maxDays: number;
  };
  habitat?: string[];
  temperature?: {
    minCelcius: number;
    maxCelcius: number;
  };
  humidity?: {
    min: number;
    max: number;
  };
  price?: {
    minWon: number;
    maxWon?: number;
  };
  difficulty?: number;
}
