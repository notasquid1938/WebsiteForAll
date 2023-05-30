import { useState, useEffect } from 'react';
import styles from '../styles/chat.module.css';
import HomeButton from './homebutton';

export default function Chat() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const colors = [
      'Red', 'Blue', 'Green', 'Yellow', 'Orange',
      'Purple', 'Pink', 'Black', 'White', 'Gray',
      'Brown', 'Cyan', 'Magenta', 'Lime', 'Teal',
      'Indigo', 'Aqua', 'Silver', 'Gold', 'Maroon',
      'Navy', 'Olive', 'Plum', 'Turquoise', 'Violet'
    ];
    const animals = [
      'Lion', 'Tiger', 'Bear', 'Elephant', 'Giraffe',
      'Fly', 'Kangaroo', 'Zebra', 'Hippo', 'Leopard',
      'Rhino', 'Penguin', 'Crocodile', 'Koala', 'Gorilla',
      'Cheetah', 'Panda', 'Kangaroo', 'Squirrel', 'Ostrich',
      'Peacock', 'Raccoon', 'Unicorn', 'Dolphin', 'Toucan'
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
    const generatedUsername = randomColor + randomAnimal + randomNumber;
    setUsername(generatedUsername);
    fetchData();
    const interval = setInterval(() => {
      fetchData();
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error('Error occurred while fetching data.', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    event.target.message.value = '';

    try {
      await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, message }),
      });
      fetchData();
    } catch (error) {
      console.error('Error occurred while submitting the form.', error);
    }
  };

  return (
    <div className={styles.chatContainer}>
      <HomeButton />
      <div className={styles.usernameContainer}>
        <p className={styles.username}>{username}</p>
      </div>
      <h1 className={styles.chatTitle}>Chat</h1>
      <div className={styles.messagesContainer}>
        {data.map((entry) => (
          <div
            key={entry._id}
            className={`${styles.chatEntry} ${entry.Username === username ? styles.currentUserMessage : ''}`}
          >
            <h2 className={styles.username}>{entry.Username}</h2>
            <p className={styles.message}>{entry.Message}</p>
            <p className={styles.timestamp}>{new Date(entry.Timestamp).toLocaleString()}</p>
          </div>
        ))}
      </div>
      <form className={styles.chatForm} onSubmit={handleSubmit}>
        <input type="text" name="message" placeholder="Message" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
