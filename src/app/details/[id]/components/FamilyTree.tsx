import FamilyMemberData from './family_tree/FamilyMemberData';
import FamilyTreeImpl from './family_tree/FamilyTreeImpl';
import styles from './FamilyTree.module.css';
import Module from './Module';

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
