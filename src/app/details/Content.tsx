import styles from './Content.module.css';
import FamilyTree from './family_tree/FamilyTree';
import Module from './Module';

interface Props {
  id: string;
}

export default function Content({ id }: Props) {
  return (
    <Module title="가계도">
      <div className={styles.FamilyTreeWrapper}>
        <FamilyTree id={id} />
      </div>
    </Module>
  );
}
