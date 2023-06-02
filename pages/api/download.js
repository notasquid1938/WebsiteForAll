import fs from 'fs-extra';
import path from 'path';
import multer from 'multer';

const storage = multer.diskStorage({
  destination: './files',
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  },
});

const upload = multer({ storage }).single('file');

const filesHandler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      const files = await fs.readdir('./files');
      const fileDetails = await Promise.all(
        files.map(async (file) => {
          const filePath = path.join('./files', file);
          const fileStats = await fs.stat(filePath);
          return {
            name: file,
            size: fileStats.size,
            path: filePath, // Add the file path to the response
          };
        })
      );
      res.setHeader('Content-Type', 'application/json'); // Set the response content type
      res.status(200).json(fileDetails);
    } catch (error) {
      console.error('Error reading files:', error);
      res.status(500).json({ error: 'Failed to read files' });
    }
  } else if (req.method === 'POST') {
    upload(req, res, (error) => {
      if (error) {
        console.error('Error uploading file:', error);
        res.status(500).json({ error: 'Failed to upload file' });
      } else {
        res.status(200).json({ message: 'File uploaded successfully' });
      }
    });
  }
};

export default filesHandler;
