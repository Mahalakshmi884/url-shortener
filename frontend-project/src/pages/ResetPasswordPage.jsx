import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function ResetPasswordPage() {
  const { token } = useParams();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
    try {
      await axios.post(`http://localhost:5000/api/auth/reset-password/${token}`, { password });
      setMessage('Password reset successful. You can now log in with your new password.');
    } catch (error) {
      setMessage('Password reset failed. Please try again.');
    }
  };

  return (
    <div className="reset-password-container">
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          placeholder="New Password" 
          required 
        />
        <input 
          type="password" 
          value={confirmPassword} 
          onChange={(e) => setConfirmPassword(e.target.value)} 
          placeholder="Confirm Password" 
          required 
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ResetPasswordPage;
