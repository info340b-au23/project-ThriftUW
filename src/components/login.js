import React from 'react';

export function LoginForm (props) {
const handleInputChange = (e) => {
    const {name, value} = e.target;
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
        .then（（）=>｛













}

  return (

    <main>

      


      
    </main>
  );
};

