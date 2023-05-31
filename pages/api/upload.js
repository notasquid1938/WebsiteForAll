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

    form.uploadDir = path.join(process.cwd(), 'files');
    form.keepExtensions = true; // Keep the file extensions

    form.parse(req, (err, fields, files) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to upload file' });
        return;
      }

      // Access the uploaded file using `files.file`
      const uploadedFile = files.file;
      const fileExt = path.extname(uploadedFile.name);
      const fileName = path.basename(uploadedFile.name, fileExt); // Get the file name without extension

      // Generate a unique file name with original extension
      const uniqueFileName = `${fileName}_${Date.now()}${fileExt}`;

      // Move the uploaded file to the desired location with the unique file name
      const filePath = path.join(form.uploadDir, uniqueFileName);
      fs.renameSync(uploadedFile.path, filePath);

      // Return the file details or any other response you need
      res.status(200).json({ fileName: uniqueFileName });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
}
