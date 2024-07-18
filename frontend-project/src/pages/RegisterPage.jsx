import React, { useState } from 'react';
import axios from 'axios';

function RegisterPage() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/register', { username, firstName, lastName, password });
      alert('Registration successful, please check your email to activate your account.');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="email" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          placeholder="Email" 
          required 
        />
        <input 
          type="text" 
          value={firstName} 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder="First Name" 
          required 
        />
        <input 
          type="text" 
          value={lastName} 
          onChange={(e) => setLastName(e.target.value)} 
          placeholder="Last Name" 
          required 
        />
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="Password" 
          required 
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default RegisterPage;
