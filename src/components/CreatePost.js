import React, { useEffect, useState } from 'react';


function loginForm() {
    const theme = useTheme();

    const [formData, setFromData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
    });
}

const [errors, setErrors] = useState({});
const [isAlertOpen, setAlertOpen] = useState(false);

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
            .then(() => {
                setAlertOpen(true);
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    message: '',
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
)