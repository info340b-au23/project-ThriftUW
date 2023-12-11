import React, { useState } from 'react';
import { ref, getDatabase, push as firebasePush } from 'firebase/database'

function CreatePostForm() {

    const [formData, setFormData] = useState({
        imgURL: '',
        userName: '',
        cardText: '',
        alt: '',
        date: '',
        season: ''

    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Form submitted:', formData);
        setFormData({
          imgURL: '',
          userName: '',
          cardText: '',
          alt: '',
          date: '',
          season: ''
        });
      };

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="imgURL">ImageURL:</label>
                    <input
                        type="hyperlink"
                        id="imgURL"
                        name="imgURL"
                        value={formData.imgURL}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="userName">Username:</label>
                    <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="cardText">Description:</label>
                    <input
                        type="text"
                        id="cardText"
                        name="cardText"
                        value={formData.cardText}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="alt">Alternative text:</label>
                    <input
                        type="text"
                        id="alt"
                        name="alt"
                        value={formData.alt}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="date">Date:</label>
                    <input
                        type="text"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                    />
                </div>
                <div>
                    <label htmlFor="season">Season:</label>
                    <input
                        type="text"
                        id="season"
                        name="season"
                        value={formData.season}
                        onChange={handleInputChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

USE FOR LATER!

function AddPost () {
    return (
        <form className="container mt-5" id="addPostForm">
                <h3>Create Post</h3>
                <div className="mb-3">
                    <label for="imageInput" className="form-label">Image URL:</label>
                    <input type="text" className="form-control" id="imageInput" name="image" required/>
                </div>
                <div className="mb-3">
                    <label for="titleInput" className="form-label">Title:</label>
                    <input type="text" className="form-control" id="titleInput" name="title" required/>
                </div>
                <div className="mb-3">
                    <label for="textInput" className="form-label">Caption:</label>
                    <textarea className="form-control" id="textInput" name="text" required></textarea>
                </div>
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
                <button type="submit" className="btn btn-primary">Post to Timeline</button>
            </form>
    )
}










*/
