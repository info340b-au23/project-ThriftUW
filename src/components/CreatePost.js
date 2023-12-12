import React, { useState } from 'react';
import { getDatabase, ref, set as firebaseSet, push as firebasePush } from 'firebase/database';
//imported library
import Button from 'react-bootstrap/Button'

export function CreatePostForm() {
    const [formData, setFormData] = useState({
        imgURL: '',
        userName: '',
        cardText: '',
        alt: '',
        date: ''

    });

    const [errors, setErrors] = useState({});
    const [isAlertOpen, setAlertOpen] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErrors = {};

        //Check if required empty
        if(!formData.imgURL.trim()) {
            validationErrors.imgURL = 'Image URL required';
        }
        if(!formData.userName.trim()) {
            validationErrors.userName = 'Username required';
        }
        if(!formData.cardText.trim()) {
            validationErrors.cardText = 'Decription required';
        }
        if(!formData.alt.trim()) {
            validationErrors.alt = 'Alt text required';
        }
        if(!formData.date.trim()) {
            validationErrors.date = 'Date required';
        }

        if (Object.keys(validationErrors).length === 0) {
            const db = getDatabase();
            const userRef = ref(db, 'users');

            firebasePush(userRef, formData)
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
                    console.error("Error writing to firebase database", error);
                });
        } else {
            setErrors(validationErrors);
        }
    };
    return (
        <div>
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
                <Button variant="success">Submit</Button>{' '}
            </form>
        </div>
    );
}