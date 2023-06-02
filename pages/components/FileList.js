import React, { useEffect, useState } from 'react';

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    fetch('/api/files')
      .then((response) => response.json())
      .then((data) => {
        setFiles(data);
      })
      .catch((error) => {
        console.error('Error fetching files:', error);
      });
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
