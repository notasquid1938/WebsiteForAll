import React from 'react';
import { useState, useEffect } from 'react';
import styles from '../../styles/username.module.css'; 

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

const Username = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomAnimal = animals[Math.floor(Math.random() * animals.length)];
    const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
    const generatedUsername = randomColor + randomAnimal + randomNumber;
    setUsername(generatedUsername);
  }, []);

  return (
    <div className={styles.usernameContainer}>
      <p className={styles.username}>{username}</p>
    </div>
  );
}

export default Username; 

  