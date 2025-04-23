import { SearchEntityData } from '../search/page';
import DUMMY_ENTITIES from './dummy_entities';

export default function getDummySearch(): SearchEntityData[] {
  return DUMMY_ENTITIES.map((entity) => entity as SearchEntityData);
}
