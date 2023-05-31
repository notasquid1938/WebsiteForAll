import { useState, useEffect } from 'react';
import styles from '../styles/files.module.css';
import HomeButton from './components/homebutton';

export default function Files() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadedFiles, setUploadedFiles] = useState([]);

  useEffect(() => {
    fetch('/api/files')
      .then((response) => response.json())
      .then((data) => setUploadedFiles(data.files))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      fetch('/api/upload', {
        method: 'POST',
        body: formData,
      })
        .then((response) => {
          // Handle the response
          if (response.ok) {
            return response.json();
          } else {
            throw new Error('Failed to upload file');
          }
        })
        .then((data) => {
          // File uploaded successfully
          setUploadedFiles((prevFiles) => [...prevFiles, data.fileName]);
        })
        .catch((error) => {
          // Handle the error
          console.error(error);
        });
    }
  };

  const handleFileDownload = (fileName) => {
    fetch(`/api/files/${fileName}`)
      .then((response) => {
        if (response.ok) {
          return response.blob();
        } else {
          throw new Error('Failed to download file');
        }
      })
      .then((blob) => {
        // Create a temporary URL for the blob
        const url = URL.createObjectURL(blob);

        // Create a link element and click it to initiate the download
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();

        // Clean up the temporary URL
        URL.revokeObjectURL(url);
      })
      .catch((error) => {
        // Handle the error
        console.error(error);
      });
  };

  return (
    <div>
      <HomeButton />
      <div>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleFileUpload}>Upload</button>
      </div>
      <div>
        {uploadedFiles.map((fileName, index) => (
          <div key={index}>
            <p>{fileName}</p>
            <button onClick={() => handleFileDownload(fileName)}>Download</button>
          </div>
        ))}
      </div>
      <p>Under Construction</p>
    </div>
  );
}
