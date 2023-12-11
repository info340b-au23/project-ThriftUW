import React, { useState } from 'react';

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