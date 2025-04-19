import Image from 'next/image';
import stlyes from './Banner.module.css';
import FamilyMemberData from '../family_tree/FamilyMemberData';
import Module from '../Module';

interface Props {
  entity: FamilyMemberData & { bannerImages: string[] };
}

export default function Banner({ entity }: Props) {
  return (
    <Module className={stlyes.Banner}>
      <div className={stlyes.BannerContentWrapper}>
        <Image src={entity.bannerImages[0]} fill alt='Banner image' style={{ objectFit: 'cover' }} />
        <div className={stlyes.BannerContent}>
          <h1 className={stlyes.Name}>{entity.name}</h1>
          <h2 className={stlyes.Species}>게코 도마뱀</h2>
        </div>
      </div>
    </Module>
  );
}
