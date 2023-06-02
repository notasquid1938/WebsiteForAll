import multer from 'multer';
import path from 'path';

export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'files');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const timestamp = Date.now(); // Get the current timestamp
    const originalName = file.originalname;
    const extension = path.extname(originalName);
    const fileName = `${path.basename(originalName, extension)}-${timestamp}${extension}`;
    cb(null, fileName);
  },
});

const upload = multer({ storage });

export default async function handler(req, res) {
  try {
    upload.single('file')(req, res, async (err) => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to upload file' });
        return;
      }

      const { file, body: { fullName } } = req;
      const fileName = file.filename; // Use the generated filename
      const filePath = path.join(uploadDir, fileName);

      res.status(200).json({ fileName });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to upload file' });
  }
}
