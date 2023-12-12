import React, { useState } from 'react';
import staticPosts from "../data/staticPosts.json";


export function FilterForm (props) {

  // State for selected season
  const [selectedSeason, setSelectedSeason] = useState('Winter');

  // Function to filter posts by season
  const filterBySeason = (selectedSeason) => {
  return staticPosts.filter(post => post.filter.season === selectedSeason);
  };

};