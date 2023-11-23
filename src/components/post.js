'use strict';
import React from 'react';
import '../src/login.js';

export function Post (props) {
    return (
        <div>
        <header>
          <div>
            <h1>Out-Of-Fits</h1>
            <h2>Your UW Campus Thrift Community & Marketplace</h2>
          </div>
          <nav>
            <input type="checkbox" id="nav-toggle" className="nav-toggle" />
            <label htmlFor="nav-toggle" className="dropdown-btn">
              &#9776; Menu
            </label>
            <ul>
              <li><a href="login.html">Main Page</a></li>
              <li><a href="search.html">Search</a></li>
              <li><a href="posts.html">Post Fits</a></li>
            </ul>
          </nav>
        </header>
  
        <main>
            <form class="container mt-5" id="addPostForm">
                <h3>Create Post</h3>
                <div class="mb-3">
                    <label for="imageInput" class="form-label">Image URL:</label>
                    <input type="text" class="form-control" id="imageInput" name="image" required>
                </div>
                <div class="mb-3">
                    <label for="titleInput" class="form-label">Title:</label>
                    <input type="text" class="form-control" id="titleInput" name="title" required>
                </div>
                <div class="mb-3">
                    <label for="textInput" class="form-label">Caption:</label>
                    <textarea class="form-control" id="textInput" name="text" required></textarea>
                </div>
                <div class="filter-group">
                    <label for="season">Season:</label>
                    <select id="season">
                    <option value="all">All</option>
                    <option value="summer">Summer</option>
                    <option value="fall">Fall</option>
                    <option value="winter">Winter</option>
                    <option value="spring">Spring</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label for="grade-level">Grade Level:</label>
                    <select id="grade-level">
                    <option value="all">All</option>
                    <option value="freshman">Freshman</option>
                    <option value="sophomore">Sophomore</option>
                    <option value="junior">Junior</option>
                    <option value="senior">Senior</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label for="size">Size:</label>
                    <select id="size">
                    <option value="all">All</option>
                    <option value="XXS">XXS</option>
                    <option value="XS">XS</option>
                    <option value="S">S</option>
                    <option value="M">M</option>
                    <option value="L">L</option>
                    <option value="XL">XL</option>
                    <option value="XXL">XXL</option>
                    <option value="0">0</option>
                    <option value="2">2</option>
                    <option value="4">4</option>
                    <option value="6">6</option>
                    <option value="8">8</option>
                    <option value="10">10</option>
                    <option value="12">12</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label for="color">Color:</label>
                    <select id="color">
                    <option value="all">All</option>
                    <option value="brown">Brown</option>
                    <option value="white">White</option>
                    <option value="black">Black</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="purple">Purple</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                    <option value="gold">Gold</option>
                    <option value="silver">Silver</option>
                    <option value="pink">Pink</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label for="brands">Popular Brands:</label>
                    <select id="brands">
                    <option value="all">All</option>
                    <option value="urban outfitters">Urban Outfitters</option>
                    <option value="nike">Nike</option>
                    <option value="adidas">Adidas</option>
                    <option value="brandy melville">Brandy Melville</option>
                    <option value="pacsun">Pacsun"</option>
                    <option value="H&M">H&M</option>
                    <option value="princess polly">Princess Polly</option>
                    <option value="abercrombie & fitch">Abercrombie & Fitch</option>
                    <option value="zara">Zara</option>
                    </select>
                </div>
                <div class="filter-group">
                    <label for="condition">Condition:</label>
                    <select id="condition">
                    <option value="all">All</option>
                    <option value="brand new">Brand New</option>
                    <option value="like new">Like New</option>
                    <option value="used great">Used: Great</option>
                    <option value="used good">Used: Good</option>
                    <option value="used fair">Used: Fair</option>
                    </select>
                </div>
                <button type="submit" class="btn btn-primary">Post to Timeline</button>
            </form>
            
        
            <div class="container posts">
                <div class="card border-light mb-3 mt-5 post">
                    <div class="card-body">
                        <img src="img/outfit1.jpeg" class="card-img"
                            alt="A person posing in a neutral colored outfit.">

                        <div class="card-body-text">
                            <div class="card-title"> <small class="text-muted">user123</small></div>
                            <div class="card-text">Autumn Neutral</div>
                            <a href="" class="btn">❤️</a>
                            <a href="" class="btn">💬</a>
                            <a href="" class="btn">🔁</a>
                            <div class="card-footer bg-transparent"></div>
                            <p class="card-text"><small class="text-muted">October 14</small></p>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="container posts">
                <div class="card border-light mb-3 mt-5 post">
                    <div class="card-body">
                        <img src="img/outfit2.jpeg" class="card-img-top"
                            alt="A person in a black and grey outfit.">

                        <div class="card-body-text">
                            <div class="card-title"> <small class="text-muted">user123</small></div>
                            <div class="card-text">Black & grey</div>
                            <a href="" class="btn">❤️</a>
                            <a href="" class="btn">💬</a>
                            <a href="" class="btn">🔁</a>
                            <div class="card-footer bg-transparent"></div>
                            <p class="card-text"><small class="text-muted">October 14</small></p>
                        </div>
                    </div>

                </div>
            </div>
        </main>
  
        <footer>
          <div className="container">
            <p>&copy; 2023 A ThriftUW project. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
};


