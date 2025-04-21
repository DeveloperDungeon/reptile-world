import MainSearchForm from './MainSearchForm';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.Container}>
      <div className={styles.TextContainer}>
        <h1 className={styles.Heading}>놀라운 파충류 세계 탐험</h1>
        <p className={styles.Description}>
          웅장한 도마뱀부터 화려한 뱀, 그리고 고대의 거북이까지, 매혹적인 파충류
          세계를 탐험해보세요.
        </p>
      </div>
      <MainSearchForm />
    </div>
  );
}
