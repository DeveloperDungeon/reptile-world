'use client'

import Image from 'next/image';
import { useState } from 'react';
import Module from '../../../../common/Module';
import FamilyMemberData from '../family_tree/FamilyMemberData';
import stlyes from './Banner.module.css';
import BannerCarousel from './BannerCarousel';

interface Props {
  entity: FamilyMemberData & { bannerImages: string[] };
}

export default function Banner({ entity }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Module className={stlyes.Banner}>
      <div className={stlyes.BannerContentWrapper}>
        <Image src={entity.bannerImages[selectedIndex]} fill alt='Banner image' style={{ objectFit: 'cover' }} />
        <div className={stlyes.BannerContent}>
          <h1 className={stlyes.Name}>{entity.name}</h1>
          <h2 className={stlyes.Species}>{entity.species}</h2>
        </div>
      </div>
      <BannerCarousel
        selectedIndex={selectedIndex}
        imageSrcs={entity.bannerImages}
        onIndexSelected={setSelectedIndex}
      />
    </Module>
  );
}
