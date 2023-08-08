import { useState, useEffect } from "react";
import styles from "../styles/chat.module.css";
import HomeButton from "./components/homebutton";
import { Username, generateRandomUsername } from "./components/username";
import Head from "next/head";

export default function Chat() {
  const [data, setData] = useState([]);
  const [selectedChatroom, setSelectedChatroom] = useState("General"); // Default chatroom is 'General'

  const { username, UsernameComponent } = Username(); // Generate username

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 500);

    return () => {
      clearInterval(interval);
    };
  }, [selectedChatroom]);

  const fetchData = async () => {
    try {
      const response = await fetch(`/api/data?chatroom=${selectedChatroom}`);
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error("Error occurred while fetching data.", error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const message = event.target.message.value;
    event.target.message.value = "";

    try {
      await fetch("/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, message, selectedChatroom }),
      });
      fetchData();
    } catch (error) {
      console.error("Error occurred while submitting the form.", error);
    }
  };

  const handleChatroomChange = (event) => {
    setSelectedChatroom(event.target.value);
  };

  return (
    <div className={styles.chatContainer}>
      <Head>
        <title>GGH</title>
        <meta name="description" content="Live Chat Page for Global Good Hub" />
      </Head>
      <HomeButton />
      <div className={styles.chatroomSelector}>
        <label htmlFor="chatroom">Select Chatroom: </label>
        <select
          id="chatroom"
          name="chatroom"
          value={selectedChatroom}
          onChange={handleChatroomChange}
        >
          <option value="General">General</option>
          <option value="Spam">Spam</option>
        </select>
      </div>
      <UsernameComponent /> {/* Display generated username */}
      <h1 className={styles.chatTitle}>{selectedChatroom} Chat</h1>
      <div className={styles.messagesContainer}>
        {data.map((entry) => {
          if (entry.Chatroom === selectedChatroom) {
            return (
              <div
                key={entry._id}
                className={`${styles.chatEntry} ${
                  entry.Username === username ? styles.currentUserMessage : ""
                }`}
              >
                <h2 className={styles.username}>{entry.Username}</h2>
                <p className={styles.message}>{entry.Message}</p>
                <p className={styles.timestamp}>
                  {new Date(entry.Timestamp).toLocaleString()}
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <form className={styles.chatForm} onSubmit={handleSubmit}>
        <textarea name="message" placeholder="Message" rows={3} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
