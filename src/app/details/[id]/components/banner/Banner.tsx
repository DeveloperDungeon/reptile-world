'use client'

import EntityData from '@/app/data/EntityData';
import Image from 'next/image';
import { useState } from 'react';
import Module from '../../../../common/Module';
import stlyes from './Banner.module.css';
import BannerCarousel from './BannerCarousel';

interface Props {
  entity: EntityData;
  bannerImages: string[];
}

export default function Banner({ entity, bannerImages }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Module className={stlyes.Banner}>
      <div className={stlyes.BannerContentWrapper}>
        <Image src={bannerImages[selectedIndex]} fill alt='Banner image' style={{ objectFit: 'cover' }} />
        <div className={stlyes.BannerContent}>
          <h1 className={stlyes.Name}>{entity.name}</h1>
          <h2 className={stlyes.Species}>{entity.species}</h2>
        </div>
      </div>
      <BannerCarousel
        selectedIndex={selectedIndex}
        imageSrcs={bannerImages}
        onIndexSelected={setSelectedIndex}
      />
    </Module>
  );
}
