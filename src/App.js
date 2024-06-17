import React from 'react';
import styles from "./App.module.css";
import { sampleData } from "./sampleData";
import BusinessList from "./features/businessList/BusinessList";
import SearchBar from "./features/searchBar/SearchBar";

function App() {
  return (
    <div className={styles.App}>
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList businessList={sampleData} />
    </div>
  );
}

export default App;
