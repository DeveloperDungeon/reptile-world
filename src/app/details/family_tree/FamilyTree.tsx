'use client'

import dynamic from 'next/dynamic'

const FamilyTree = dynamic(() => import('./FamilyTreeImpl'), {
  ssr: false,
});

export default FamilyTree;
