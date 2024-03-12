import React, { useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Form = () => {
    const [isSignup, setIsSignup] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [inputs, setInputs] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [error, setError] = useState(null);

    const handleChage = (e) => {
        setInputs((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation checks
        if (!inputs.email || !inputs.password) {
            // Display an error message
            setError("Please fill in all required fields.");
            return;
            // alert("fill all the inputs");
        }

        // Additional validation logic (you can customize this based on your requirements)

        // If there are no validation errors, reset the error state
        // setError(null);

        console.log(inputs);
        // Continue with form submission logic
    };

    const resetInput = () => {
        setIsSignup(!isSignup);
        setInputs({ name: "", email: "", password: "" });
        setError(null); // Reset error state when changing between Login and SignUp
    };

    const handleToggle = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Box
                    display="flex"
                    flexDirection={"column"}
                    maxWidth={400}
                    alignItems="center"
                    justifyContent={'center'}
                    margin="auto"
                    marginTop={10}
                    padding={3}
                    borderRadius={5}
                    boxShadow={"5px 5px 10px #ccc"}
                    sx={{
                        ":hover": {
                            boxShadow: "10px 10px 20px #ccc"
                        }
                    }}
                >
                    <Typography variant='h2' padding={3} textAlign="center">
                        {isSignup ? "SignUp" : "Login"}
                    </Typography>

                    {isSignup && (
                        <TextField
                            id="outlined-basic"
                            onChange={handleChage}
                            name='name'
                            value={inputs.name}
                            label="Name"
                            margin="normal"
                            type='text'
                            variant="outlined"
                            className='password-input'
                        />
                    )}

                    <TextField
                        id="outlined-basic"
                        onChange={handleChage}
                        name='email'
                        value={inputs.email}
                        label="Email ID"
                        margin="normal"
                        type='email'
                        variant="outlined"
                        className='password-input'
                    />

                    <TextField
                        id="outlined-basic"
                        onChange={handleChage}
                        name='password'
                        value={inputs.password}
                        label="Password"
                        margin="normal"
                        type={showPassword ? "text" : "password"}
                        variant="outlined"
                        className='password-input'
                        InputProps={{
                            endAdornment: (
                                <Button onClick={handleToggle} style={{ cursor: 'pointer' }}>
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                                </Button>
                            )
                        }}
                    />

                    {/* Display validation error message */}
                    {error && (
                        <Typography color="error" variant="caption" sx={{ marginTop: 1, marginBottom: 1 }}>
                            {error}
                        </Typography>
                    )}

                    <Button
                        endIcon={isSignup ? <HowToRegIcon /> : <LoginIcon />}
                        type='submit'
                        sx={{ marginTop: 3, borderRadius: 3 }}
                        variant="contained"
                        color="success"
                    >
                        {isSignup ? "signUp" : "Login"}
                    </Button>

                    <Button
                        endIcon={isSignup ? <LoginIcon /> : <HowToRegIcon />}
                        onClick={resetInput}
                        sx={{ marginTop: 3, borderRadius: 3 }}
                    >
                        Change to {isSignup ? "Login" : "SignUp"}
                    </Button>
                </Box>
            </form>
        </div>
    );
}

export default Form;
