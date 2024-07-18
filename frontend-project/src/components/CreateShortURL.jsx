import React, { useState } from 'react';
import axios from 'axios';

function CreateShortURL() {
  const [longUrl, setLongUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post(
        'http://localhost:5000/api/urls', 
        { longUrl },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error('Error creating short URL:', error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="url" 
          value={longUrl} 
          onChange={(e) => setLongUrl(e.target.value)} 
          placeholder="Enter long URL" 
          required 
        />
        <button type="submit">Create Short URL</button>
      </form>
      {shortUrl && <p>Short URL: {shortUrl}</p>}
    </div>
  );
}

export default CreateShortURL;
