import Module from './Module';
import styles from './Content.module.css';
import FamilyTree from './family_tree/FamilyTree';

export default function Content() {
  return (
    <Module title="가계도">
      <div className={styles.FamilyTreeWrapper}>
        <FamilyTree />
      </div>
    </Module>
  );
}
