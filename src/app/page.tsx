import MainSearchForm from './MainSearchForm';
import styles from './Page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.heading}>놀라운 파충류 세계 탐험</h1>
        <p className={styles.description}>
          웅장한 도마뱀부터 화려한 뱀, 그리고 고대의 거북이까지, 매혹적인 파충류
          세계를 탐험해보세요.
        </p>
      </div>
      <MainSearchForm />
    </div>
  );
}
