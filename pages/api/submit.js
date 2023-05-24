import connectToDatabase from '../../db';

export default async function handler(req, res) {
  try {
    const { username, message } = req.body;

    const db = await connectToDatabase();
    const collection = db.collection('Messages');
    const newEntry = {
      Username: username,
      Message: message,
      Timestamp: new Date(),
    };
    await collection.insertOne(newEntry);

    res.status(200).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
