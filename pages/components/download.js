import React, { useEffect, useState } from "react";

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const fetchFiles = () => {
      fetch("/api/download")
        .then((response) => response.json())
        .then((data) => {
          setFiles(data);
        })
        .catch((error) => {
          console.error("Error fetching files:", error);
        });
    };

    // Fetch files initially
    fetchFiles();

    // Fetch files every second
    const interval = setInterval(fetchFiles, 500);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  const downloadFile = (filePath) => {
    fetch(filePath)
      .then((response) => response.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(new Blob([blob]));
        const a = document.createElement("a");
        a.href = url;
        a.download = filePath.split("/").pop(); // Set the downloaded file name
        a.click();
        window.URL.revokeObjectURL(url);
      })
      .catch((error) => {
        console.error("Error downloading file:", error);
      });
  };

  return (
    <div>
      {files.map((file) => (
        <div key={file.name}>
          <button onClick={() => downloadFile(file.path)}>{file.name}</button>
        </div>
      ))}
    </div>
  );
};

export default FileList;
