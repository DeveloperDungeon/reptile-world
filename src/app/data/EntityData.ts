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

export interface EntityDetails {
  sizeMm?: RangeValue;
  lifespanDays?: RangeValue;
  habitat?: string[];
  temperatureCelcius?: RangeValue;
  humidity?: RangeValue;
  priceWon?: RangeValue;
  difficulty?: number;
}

export interface RangeValue {
  min?: number;
  max?: number;
}

export const DIFFICULTY_TEXTS = ['입문', '초급', '중급', '상급', '전문가'];
