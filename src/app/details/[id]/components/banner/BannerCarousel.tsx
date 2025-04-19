import Image from 'next/image';
import styles from './BannerCarousel.module.css';

interface Props {
  selectedIndex: number;
  imageSrcs: string[];
  onIndexSelected: (index: number) => void;
}

export default function BannerCarousel({ selectedIndex, imageSrcs, onIndexSelected }: Props) {
  return (
    <div className={styles.BannerCarousel}>
      {imageSrcs.map((imageSrc, i) => (
        <div
          key={`image-${i}`}
          className={styles.BannerCarouselItem + (selectedIndex === i ? ' ' + styles.Selected : '')}
          onClick={() => onIndexSelected(i)}>
          <Image
            src={imageSrc}
            alt={`image-${i}`}
            className={styles.BannerCarouselItemImage}
            fill />
        </div>
      ))}
    </div>
  );
}
