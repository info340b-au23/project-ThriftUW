/*import React, { useState } from 'react';
import { ref, getDatabase, push as firebasePush } from 'firebase/database'

function CreatePostForm() {
    const formStyles = {
        padding: '2rem'
    }

    const [formData, setFormData] = useState({
        imgURL: '',
        userName: '',
        cardText: '',
        alt: '',
        date: ''

    });

    const [errors, setErrors] = useState({});
    const [isAlertOpen, setAlertOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

    if (!formData.firstName.trim()) {
        validationErrors.firstName = 'First name is required';
    }
    if (!formData.lastName.trim()) {
        validationErrors.lastName = 'Last name is required';
    }
    if (!formData.email.trim()) {
        validationErrors.email = 'Email is required';
    }
    if (!formData.message.trim()) {
        validationErrors.message = 'Message is required';
    }

        if (Object.keys (validationErrors). length === 0) {
            const db = getDatabase();
    
            const usersRef = ref(db,'users');
    
        firebasePush(usersRef, formData)
            .then(() => {
                setAlertOpen(true);
                setFormData({
                    imgURL: '',
                    userName: '',
                    cardText: '',
                    alt: '',
                    date: ''
                });
            })
            .catch((error) => {
                console.error("Error writing to Firebase Database", error);
            });
    } else {
        setErrors(validationErrors);
    }
};

    return (
        <form style={formStyles} onSubmit={handleSubmit}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="First Name"
                        name="firstName"
                        variant="outlined"
                        fullWidth
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        label="First Name"
                        name="firstName"
                        variant="outlined"
                        fullWidth
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        error={!!errors.firstName}
                        helperText={errors.firstName}
                    />
                </Grid>
            </Grid>
        </form>
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
