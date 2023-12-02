import React from "react";
import {CardList} from './Functions.js'
export function Home(props){
    
    return (
        <body>
            <header>
                <div className="head">
                    <h1>Out-Of-Fits</h1>
                    <h2>Your UW Campus Thrift Community & Marketplace</h2>
                </div>
                <nav>

                    <input type="checkbox" id="nav-toggle" className="nav-toggle"/>
                    <label for="nav-toggle" className="dropdown-btn">&#9776; Menu</label>
                    <ul>
                        <li><a href="login.html">Main Page</a></li>
                        <li><a href="search.html">Search</a></li>
                        <li><a href="posts.html">Post Fits</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="Posts">
                    <div className="card-container">
                        

                            <div>
                              <CardList />
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

            const data = [
              {
                id: 1,
                imageSrc: 'img/img1.jpeg',
                text: 'I just bought these shorts they are a perfect length!',
                tags: ['#summer', 'Tag2', 'Tag3'],
              },
              {
                id: 2,
                imageSrc: 'https://example.com/image2.jpg',
                text: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                tags: ['Tag4', 'Tag5', 'Tag6'],
              },
              // Add more data as needed
            ];

            const CardList = () => {
              return (
                <div>
                  {data.map((card) => (
                    <div key={card.id} className="card">
                      <img src={card.imageSrc} alt={`Card ${card.id}`} />
                      <p>{card.text}</p>
                      <div className="tags">
                        {card.tags.map((tag, index) => (
                          <span key={index} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              );
            };

            export default CardList;
            </body>
    );
}

