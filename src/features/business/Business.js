import React from "react";
import styles from './Business.module.css';

const Business = ({ business }) => {
  return (
    <div>
      <div>
        <img
          className={styles['business-img']}
          src={business.imageSrc}
          alt={business.name}
        />
      </div>
      <h2 className={styles['business-name']}>{business.name}</h2>
      <div className={styles['business-details']}>
        <div className={styles['business-address']}>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>
            {business.state} {business.zipCode}
          </p>
        </div>
        <div className={styles['business-category']}>
          <h3 className={styles['rating-color']}>{business.category.toUpperCase()}</h3>
          <h3 className={`${styles['business-rating']} ${styles['rating-color']}`}>
            {business.rating} stars
          </h3>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  );
};

export default Business;
