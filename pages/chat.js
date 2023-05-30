import { useState, useEffect } from 'react';
import styles from '../styles/chat.module.css';
import HomeButton from './homebutton';
import { colors, animals } from './usernames';

export default function Chat() {
  const [data, setData] = useState([]);
  const [username, setUsername] = useState('');
  const [selectedChatroom, setSelectedChatroom] = useState('General'); // Default chatroom is 'General'

  useEffect(() => {
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
      const response = await fetch(`/api/data?chatroom=${selectedChatroom}`);
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
        body: JSON.stringify({ username, message, selectedChatroom }),
      });
      fetchData();
    } catch (error) {
      console.error('Error occurred while submitting the form.', error);
    }
  };

  const handleChatroomChange = (event) => {
    setSelectedChatroom(event.target.value);
  };

  return (
    <div className={styles.chatContainer}>
      <HomeButton />
      <div className={styles.chatroomSelector}>
        <label htmlFor="chatroom">Select Chatroom: </label>
        <select id="chatroom" name="chatroom" value={selectedChatroom} onChange={handleChatroomChange}>
          <option value="General">General</option>
          <option value="Spam">Spam</option>
          <option value="Under Construction">Under Construction</option>
        </select>
      </div>
      <div className={styles.usernameContainer}>
        <p className={styles.username}>{username}</p>
      </div>
      <h1 className={styles.chatTitle}>Chat</h1>
      <div className={styles.messagesContainer}>
        {data.map((entry) => {
          // Only render messages if their chatroom matches the selected chatroom
          if (entry.Chatroom === selectedChatroom) {
            return (
              <div
                key={entry._id}
                className={`${styles.chatEntry} ${entry.Username === username ? styles.currentUserMessage : ''}`}
              >
                <h2 className={styles.username}>{entry.Username}</h2>
                <p className={styles.message}>{entry.Message}</p>
                <p className={styles.timestamp}>{new Date(entry.Timestamp).toLocaleString()}</p>
              </div>
            );
          }
          return null; // Skip rendering for messages that don't match the selected chatroom
        })}
      </div>   
      <form className={styles.chatForm} onSubmit={handleSubmit}>
        <input type="text" name="message" placeholder="Message" required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
