import React, { useEffect, useState } from 'react';
import axios from 'axios';

function URLTable() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    const fetchUrls = async () => {
      const token = localStorage.getItem('token');
      const response = await axios.get(
        'http://localhost:5000/api/urls',
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setUrls(response.data);
    };

    fetchUrls();
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Long URL</th>
          <th>Short URL</th>
          <th>Clicks</th>
        </tr>
      </thead>
      <tbody>
        {urls.map((url) => (
          <tr key={url.shortUrl}>
            <td>{url.longUrl}</td>
            <td>{url.shortUrl}</td>
            <td>{url.clicks}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default URLTable;
