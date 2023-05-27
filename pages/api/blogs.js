import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('http://127.0.0.1:1337/api/blogs');
    const data = response.data.data;
    res.status(200).json({ data });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
}
