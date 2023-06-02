import React, { useEffect, useState } from 'react';

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = () => {
      fetch('/api/download')
        .then((response) => response.json())
        .then((data) => {
          setFiles(data);
        })
        .catch((error) => {
          console.error('Error fetching files:', error);
        });
    };

    // Fetch files initially
    fetchFiles();

    // Fetch files every second
    const interval = setInterval(fetchFiles, 500);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {files.map((file) => (
        <div key={file.name}>
          <a href={`/../../files/${file.name}`} download>
            {file.name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default FileList;
