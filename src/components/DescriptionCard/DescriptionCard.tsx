import React from 'react';
import styles from './DescriptionCard.module.scss';
import { DescriptionCard as IDescriptionCard } from '../../types/description';

interface DescriptionCardProps extends IDescriptionCard {
  className?: string;
}

export const DescriptionCard: React.FC<DescriptionCardProps> = ({ 
  title, 
  items, 
  className 
}) => (
  <li className={`${styles.card} ${className || ''}`}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.info}>
      {items.map((text, index) => (
        <li key={index}>
          <p className={styles.text}>{text}</p>
        </li>
      ))}
    </ul>
  </li>
);