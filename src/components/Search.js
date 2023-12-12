import React from 'react';
import {Navbar} from './Navbar.js';
import {CreateStaticPost} from './CreatePost.js';
import {FilterForm} from './Filter.js';

export function SearchForm (props) {
  return (
    <body>
      <main>
        <section id="filters">
            <FilterForm/>
        </section>
      </main>
    </body>
  );
};

