import React from "react";
import Business from "../business/Business";
import styles from './BusinessList.module.css';

const BusinessList = ({ businessList }) => {
  return (
    <div className={styles['business-list']}>
      {businessList.map((business, index) => (
        <Business key={"business_" + index} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;