import React, { useState } from 'react';
import axios from 'axios';

function ForgotPasswordPage() {
  const [username, setUsername] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/auth/forgot-password', { username });
      alert('If the email is valid, a reset password link has been sent.');
    } catch (error) {
      console.error('Failed to send reset password link:', error);
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
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
}

export default ForgotPasswordPage;
