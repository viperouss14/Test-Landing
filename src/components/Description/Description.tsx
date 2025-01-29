import React from 'react';
import styles from './Description.module.scss';
import { DescriptionProps } from '../../types/description';
import { DescriptionCard } from '../DescriptionCard/DescriptionCard';

export const Description: React.FC<DescriptionProps> = ({ cards }) => {
  return (
    <ul className={styles.description}>
      {cards.map((card, index) => (
        <DescriptionCard
          key={index}
          title={card.title}
          items={card.items}
        />
      ))}
    </ul>
  );
};