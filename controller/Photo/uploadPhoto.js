import { Router } from 'express'
import multer from 'multer'
import  admin from 'firebase-admin';

import  serviceAccount from '../../utils/levelup-f944c-firebase-adminsdk-ms3n5-febaacf98c.json' assert { type: 'json' };

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  
  storageBucket: 'levelup-f944c', // Reemplaza con el nombre de tu proyecto de Firebase
});

const storage = multer.memoryStorage()

const upload = multer({ storage: storage })

const router = Router()

router.post('/subirFoto', upload.single('image'),async  (req, res) => {
  try {
    const bucket = admin.storage().bucket();
    const file = bucket.file(req.file.originalname);
    const fileBuffer = req.file.buffer;

    await file.save(fileBuffer, {
      metadata: {
        contentType: req.file.mimetype,
      },
    });
    const fileUrl = `https://firebasestorage.googleapis.com/v0/b/levelup-f944c/o/${file.name}?alt=media&token=30cd87f2-4a89-46c6-9cac-25ad45c76549`;
    res.status(200).json({ message: 'Archivo subido correctamente. ' ,url:fileUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al subir el archivo.' });
  }
})
export default router
