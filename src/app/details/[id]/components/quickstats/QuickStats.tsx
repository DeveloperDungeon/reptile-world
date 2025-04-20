import Image from 'next/image';
import Module from '../../../../common/Module';
import styles from './QuickStats.module.css';
import iconSize from '@/../public/icon-size.svg';
import iconLifespan from '@/../public/icon-lifespan.svg';
import iconHabitat from '@/../public/icon-habitat.svg';
import iconTemperature from '@/../public/icon-temperature.svg';
import iconHumidity from '@/../public/icon-humidity.svg';
import iconPrice from '@/../public/icon-price.svg';
import iconCareLevel from '@/../public/icon-care-level.svg';
import React from 'react';

const statsData = [
  { id: 'size', icon: iconSize, alt: 'Size', label: '크기', value: '약 18-23 cm' },
  { id: 'lifespan', icon: iconLifespan, alt: 'Lifespan', label: '수명', value: '15-20년' },
  { id: 'habitat', icon: iconHabitat, alt: 'Habitat', label: '서식지', value: '열대 / 교목성' },
  { id: 'temperature', icon: iconTemperature, alt: 'Temperature', label: '온도', value: '약 22-26℃' },
  { id: 'humidity', icon: iconHumidity, alt: 'Humidity', label: '습도', value: '60-80%' },
  { id: 'price', icon: iconPrice, alt: 'Price', label: '가격 범위', value: '약 5만원 ~' },
  { id: 'careLevel', icon: iconCareLevel, alt: 'Care Level', label: '사육 난이도', value: '초보-중급' },
];

export default function QuickStats() {
  return (
    <Module title="정보">
      <div className={styles.QuickStats}>
        {statsData.map((stat) => (
          <React.Fragment key={`stat-${stat.id}`}>
            <div className={styles.statIcon}>
              <Image src={stat.icon} alt={stat.alt} width={14} height={14} />
            </div>
            <div className={styles.statLabel}>
              {stat.label}
            </div>
            <div className={styles.statValue}>
              {stat.value}
            </div>
          </React.Fragment>
        ))}
      </div>
    </Module>
  );
}
