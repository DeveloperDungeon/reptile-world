import EntityData from '../data/EntityData';
import DUMMY_ENTITIES from './dummy_entities';

export default function getDummySearch(): (EntityData & {
  difficulty: number;
})[] {
  const difficultyLevels = [1, 1, 2, 4, 4, 1, 2, 3, 5, 1, 3];
  return DUMMY_ENTITIES.map((entity, i) => ({
    ...entity,
    difficulty: difficultyLevels[i],
  }));
}
