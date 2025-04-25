import Image from 'next/image';
import styles from './page.module.css';
import BreederBannerImage from '@/../public/breeder-banner.jpeg';

interface Props {
  searchParams: Promise<{
    id?: string;
  }>;
}

export default async function BreederPage({ searchParams }: Props) {
  const { id } = await searchParams;
  return (
    <>
      <div className={styles.Banner}>
        <div className={styles.ImageContentWrapper}>
          <Image src={BreederBannerImage} fill alt='Banner image' className={styles.BannerImage} />
          <div className={styles.BannerContentWrapper}>
            <Image
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile image"
              width={312}
              height={312}
              className={styles.ProfileImage} />
            <div className={styles.BannerContent}>
              <h1>이하윤</h1>
              <h2>크레스티드 게코 전문 브리더</h2>
              <p>윤리적이고 전문적인 파충류 브리더입니다.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
