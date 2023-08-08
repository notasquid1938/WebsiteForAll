import React, { useState, useEffect } from 'react';
import styles from '../../styles/username.module.css';

const colors = [
  'red', 'blue', 'green', 'yellow', 'orange',
  'purple', 'pink', 'black', 'white', 'gray',
  'brown', 'cyan', 'magenta', 'lime', 'teal',
  'indigo', 'aqua', 'silver', 'gold', 'maroon',
  'navy', 'olive', 'plum', 'turquoise', 'violet'
];

const animals = [
  'lion', 'tiger', 'bear', 'elephant', 'giraffe',
  'fly', 'kangaroo', 'zebra', 'hippo', 'leopard',
  'rhino', 'penguin', 'crocodile', 'koala', 'gorilla',
  'cheetah', 'panda', 'kangaroo', 'squirrel', 'ostrich',
  'peacock', 'raccoon', 'unicorn', 'dolphin', 'toucan'
];

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const generateRandomUsername = () => {
  const randomColor = capitalizeFirstLetter(colors[Math.floor(Math.random() * colors.length)]);
  const randomAnimal = capitalizeFirstLetter(animals[Math.floor(Math.random() * animals.length)]);
  const randomNumber = Math.floor(100000000 + Math.random() * 900000000);
  return randomColor + randomAnimal + randomNumber;
};

const Username = () => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const generatedUsername = generateRandomUsername();
    setUsername(generatedUsername);
  }, []);

  return {
    username,
    UsernameComponent: () => (
      <div className={styles.usernameContainer}>
        <p className={styles.username}>{username}</p>
      </div>
    ),
  };
};

export { Username };
