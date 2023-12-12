import React, { useState } from 'react';
import staticPosts from "../data/staticPosts.json";
import { CreatePostForm } from './CreatePost';
import {Posts} from './Post.js';


export function FilterForm(props) {

  // State for selected season
  const [selectedSeason, setSelectedSeason] = useState('');


  // function to handle the season change
  const handleSeasonChange = (event) => {
    setSelectedSeason(event.target.value);
  }


  // Function to filter posts by season
  // it is passing an empty array
  const filterBySeason = (selectedSeason) => {
    // access the posts object inside of the json
    const posts = staticPosts[0].posts;
    return Object.values(posts).filter(post => post.filter.season === selectedSeason);
  };

  // filtered posts based on the selected season
  const filteredPosts = filterBySeason();

  return (
    <div>
      <select value={selectedSeason} onChange={handleSeasonChange}>
        <option value="">Winter</option>
        <option>Spring</option>
        <option>Summer</option>
        <option>Fall</option>
      </select>

      <div>
        <Posts filteredPosts={filteredPosts}/>
      </div>
    </div>
  )


};