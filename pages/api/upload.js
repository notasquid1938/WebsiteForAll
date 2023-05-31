import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  try {
    const form = new formidable.IncomingForm();

    const uploadDir = path.join(process.cwd(), 'files'); // Check if 'files' directory exists
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir); // Create 'files' directory if it doesn't exist
    }

    form.uploadDir = uploadDir;
    form.keepExtensions = true; // Keep the file extensions

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to upload file' });
        return;
      }

      // Access the uploaded file using `files.file`
      const uploadedFile = files.file;
      const fileName = uploadedFile.name;

      // Move the uploaded file to the desired location with the original file name
      const filePath = path.join(form.uploadDir, fileName);
      fs.renameSync(uploadedFile.path, filePath);

      // Return the file details or any other response you need
      res.status(200).json({ fileName });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
}
