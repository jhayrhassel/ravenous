import React from "react";
import styles from './SearchBar.module.css';

const SearchBar = () => {
  return (
    <div className={styles['search-bar-container']}>
      <div>
        <ul>
          <li>Best Match</li>
          <li>Highest Rated</li>
          <li>Most Reviewed</li>
        </ul>
      </div>
      <div>
        <input className={`${styles['search-input']} ${styles['search-business-input']}`} type="text" placeholder="Search Businesses"/>
        <input className={styles['search-input']} type="text" placeholder="Where?"/>
      </div>
      <div>
        <button className={styles['search-button']}>Let's go</button>
      </div>
    </div>
  );
};

export default SearchBar;
