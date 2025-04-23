import iconCareLevel from '@/../public/icon-care-level.svg';
import iconHabitat from '@/../public/icon-habitat.svg';
import iconHumidity from '@/../public/icon-humidity.svg';
import iconLifespan from '@/../public/icon-lifespan.svg';
import iconPrice from '@/../public/icon-price.svg';
import iconSize from '@/../public/icon-size.svg';
import iconTemperature from '@/../public/icon-temperature.svg';
import { DIFFICULTY_TEXTS, EntityDetails, RangeValue } from '@/app/data/EntityData';
import Image from 'next/image';
import React from 'react';
import Module from '../../../../common/Module';
import styles from './QuickStats.module.css';

// TODO: Consolidate convert()
const statDisplayMap = new Map([
  ['sizeMm', {
    label: '크기',
    icon: iconSize,
    convert: (data: number) => (data / 10).toLocaleString() + 'cm',
  }],
  ['lifespanDays', {
    label: '수명',
    icon: iconLifespan,
    convert: (data: number) => Math.round(data / 365).toLocaleString() + '년',
  }],
  ['habitat', {
    label: '서식지',
    icon: iconHabitat,
  }],
  ['temperatureCelcius', {
    label: '온도',
    icon: iconTemperature,
    convert: (data: number) => data.toLocaleString() + '℃',
  }],
  ['humidity', {
    label: '습도',
    icon: iconHumidity,
    convert: (data: number) => data.toLocaleString() + '%',
  }],
  ['priceWon', {
    label: '가격',
    icon: iconPrice,
    convert: (data: number) => (data / 10000).toLocaleString() + '만원',
  }],
  ['difficulty', {
    label: '난이도',
    icon: iconCareLevel,
    convert: (data: number) => DIFFICULTY_TEXTS[data - 1],
  }],
]);

interface Props {
  details: EntityDetails;
}

function valueToString(value: any, display: {
  label: string;
  icon: any;
  unit?: string;
  convert?: (data: number) => string;
}) {
  if (typeof value === 'number') {
    return DIFFICULTY_TEXTS[value - 1];
  } else if (Array.isArray(value)) {
    return value.join('/');
  } else if (typeof value === 'object') {
    // Assume the value is RangeValue.
    const range = value as RangeValue;
    return (range.min ? display.convert!(range.min) : '') + ' ~ ' + (range.max ? display.convert!(range.max) : '');
  }

  return JSON.stringify(value);
}

export default function QuickStats({ details }: Props) {
  return (
    <Module title="정보">
      <div className={styles.QuickStats}>
        {Object.entries(details).map(([stat, value]) => {
          const display = statDisplayMap.get(stat);
          if (display == null) {
            return <></>;
          }

          return (
            <React.Fragment key={`stat-${stat}`}>
              <div className={styles.statIcon}>
                <Image src={display.icon} alt={display.label} width={14} height={14} />
              </div>
              <div className={styles.statLabel}>
                {display.label}
              </div>
              <div className={styles.statValue}>
                {valueToString(value, display)}
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </Module>
  );
}
