import Module from './Module';
import styles from './Content.module.css';
import FamilyTree from './FamilyTree';

export default function Content() {
  return (
    <Module className={styles.Content} title="가계도">
      <FamilyTree />
    </Module>
  );
}
