import styles from '../styles/files.module.css';
import HomeButton from './components/homebutton';
import Username from './components/username';
import React, { useState, useEffect } from 'react';
import FileList from './components/FileList';


export default function Files() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const fullName = file.name;
    setSelectedFile({ file, fullName });
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const { file, fullName } = selectedFile;

      const formData = new FormData();
      formData.append('file', file);
      formData.append('fullName', fullName); // Append the full name to the form data

      fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to upload file');
          }
        })
        .then((data) => {
          setFileList((prevFileList) => [...prevFileList, data.fileName]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  // Fetch the list of uploaded files when the component mounts
  useEffect(() => {
    fetch('/api/files')
      .then((response) => response.json())
      .then((data) => {
        setFileList(data.files);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleFileDownload = (fileName) => {
    fetch(`files/${fileName}`)
      .then((response) => {
        if (response.ok) {
          return response.blob();
        } else {
          throw new Error('Failed to download file');
        }
      })
      .then((blob) => {
        const url = URL.createObjectURL(blob);

        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.container}>
      <HomeButton />
      <Username />
      <div className={styles.fileupload}>
        <label htmlFor="file-input">Choose a file:</label>
        <input id="file-input" type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload</button>
      </div>
      <h1>Files</h1>
      <FileList />
    </div>
  );
}
