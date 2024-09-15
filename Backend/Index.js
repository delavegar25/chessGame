const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');
const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());

//Supabase client initialization
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Helper function to create JWT token 
const createToken = (user) => {
    return jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
        expiresIn: '1h',   
    });
};

// sign up route 
app.post('/api/signup', async (req, res) => {
    const { name, username, email, password, confirmPassword } = req.body;


// Basic Validation

if(!name || !username || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'All fields are required' });
}

if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
}

try {
    // check if the user already exists
    const { data: existingUser, error: existingUserError } = await supabase 
     .from('users')
     .select('*')
     .eq('email', email)
     .single();

     if(existingUser) {
        return res.status(400).json({ message: 'User already exists' });
     }

     if(existingUserError) {
        return res.status(400).json({ message: 'Invalid User '})
     }

     // hash the password
     const hashedPassword = await bcrypt.hash(password, 10);

     // insert new user into supabase
     const { data: newUser, error: signUpError } = await supabase 
          .from('users')
          .insert([{ name, username, email, password: hashedPassword }])
          .single();

          if(signUpError) {
            throw signUpError;
          }

          // Create a token for the new user 
          const token = createToken(newUser);

          res.status(201).json({ message: 'Account created', token });
}   catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
}
})


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
