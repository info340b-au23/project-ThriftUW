import React from 'react';
import {Navbar} from './Navbar.js';

export function SearchForm (props) {
  return (
    <body>
      <header>
        {<Navbar/>}
    </header>
      <main>
        <section id="filters">
          <div className="filter-group">
            <label for="season">Season:</label>
            <select id="season">
              <option value="all">All</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall</option>
              <option value="winter">Winter</option>
              <option value="spring">Spring</option>
            </select>
          </div>
          <div className="filter-group">
            <label for="grade-level">Grade Level:</label>
            <select id="grade-level">
              <option value="all">All</option>
              <option value="freshman">Freshman</option>
              <option value="sophomore">Sophomore</option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
            </select>
          </div>
          <div className="filter-group">
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
          <div className="filter-group">
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
          <div className="filter-group">
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
          <div className="filter-group">
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
        </section>


        <section id="Posts">
          <div className="card-container">

            <div className="card">
              <img src="img/img1.jpeg" alt="abstract art"/>
              <p>#summer #jean #shorts #levis</p>
              <p>I just bought these shorts they are a perfect length!</p>
              <p>@sarahbell333</p>
            </div>


            <div className="card">
              <img src="img/img2.jpeg" alt="abstract art"/>
              <p>#summer #bottoms #linen #thrifted</p>
              <p>These linen pants are so breathable and flowy</p>
              <p>@jamielethly</p>
            </div>


            <div className="card">
              <img src="img/img3.jpeg" alt="abstract art"/>
              <p>#summer #orange #bottoms #pants #funky</p>
              <p>These pants are so funky and bright, I thrifted them, aren't they cool!</p>
              <p>@skielemyeres</p>
            </div>


            <div className="card">
              <img src="img/img4.jpeg" alt="abstract art"/>
              <p>#summer #skirt #bottoms #jean #short</p>
              <p>Jean skirts are so in recenty I want to get one for myself!</p>
              <p>@maggielowe</p>
            </div>


            <div className="card">
              <img src="img/img6.jpeg" alt="abstract art"/>
              <p>#summer #europe #midi #skirt #floral</p>
              <p>Flowy floral skirts have been all over my fashion pages! I thrifted this at the fremont market!</p>
              <p>@maevecostello</p>
            </div>

            <div className="card">
              <img src="img/img7.jpeg" alt="abstract art"/>
              <p>#summer #linen #pants #brown #H&M</p>
              <p>This are me in my new linen pants, my girlfriend bought them for me. Have been living in them Bought them on sale for $25.00</p>
              <p>@connormason</p>
            </div>

            <div className="card">
              <img src="img/img8.jpeg" alt="abstract art"/>
              <p>#summer #jean #shorts #zara #thrifted</p>
              <p>Found these awesome thrifted barely used zara mens jean shorts. Love the color.</p>
              <p>@aidangraceee</p>
            </div>

            <div className="card">
              <img src="img/img9.jpeg" alt="abstract art"/>
              <p>#summer #shorts #graphics #brown</p>
              <p>Kinda interesting shorts. The graphic is what spoke to me. I might sell them though. Hit me up if you are interested in buying!</p>
              <p>@joeypopp</p>
            </div>

            <div className="card">
              <img src="img/img10.jpeg" alt="abstract art"/>
              <p>#summer #green #shorts #cargo</p>
              <p>This green is a dope color. I found it at the vintage market near capitol hill. DM me up for the name.</p>
              <p>@ryanpenz12</p>
            </div>

          </div>
        </section>
      </main>
      <footer>
        <div className="container">
          <p>&copy; 2023 A ThriftUW project. All rights reserved.</p>
        </div>
      </footer>
    </body>
  );
};

//export default searchForm;