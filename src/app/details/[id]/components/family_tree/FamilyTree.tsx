import FamilyMemberData from '@/app/data/FamilyMemberData';
import Module from '../../../../common/Module';
import styles from './FamilyTree.module.css';
import FamilyTreeImpl from './FamilyTreeImpl';

interface Props {
  familyTree: FamilyMemberData;
  selectedId: string;
}

export default async function FamilyTree({ familyTree, selectedId }: Props) {
  return (
    <Module title="가계도">
      <div className={styles.FamilyTreeWrapper}>
        <FamilyTreeImpl familyTree={familyTree} selectedId={selectedId} />
      </div>
    </Module>
  );
}
