// src/GridComponents.tsx
import React from 'react';
import { Phone } from '../types';
import GridComponent from './GridComponent';

interface GridComponentsProps {
  phones: Phone[];
}

const GridComponents: React.FC<GridComponentsProps> = ({ phones }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {phones.map((phone) => (
      <GridComponent phone={phone} key={phone.image} />
))}
    </div>
  );
};

export default GridComponents;
