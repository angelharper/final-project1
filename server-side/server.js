const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const metadata = require('./metadata');
const admins = require('./admins');

const authRouter = require('./routes/auth');
const wardrobeRouter = require('./routes/wardrobe');

dotenv.config()
mongoose.connect(process.env.MONGO_URL).then(()=> console.log("db connected")).catch((err) => console.log(err))

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// API endpoint to serve metadata
app.get('/api/metadata', (req, res) => {
  res.json(metadata);
});

// POST endpoint for login
app.use('/api/', authRouter);

app.use('/api/image/', wardrobeRouter);
// app.post('/auth/adminlogin', (req, res) => {
//   const { email, password } = req.body;

//   // Check if admin credentials exist
//   const admin = admins.find(admin => admin.email === email && admin.password === password);

//   if (admin) {
//     res.status(200).json({ message: 'Login successful' });
//   } else {
//     res.status(401).json({ message: 'Unauthorized' });
//   }
// });

// Function to save admins to a JavaScript file
// const saveAdminsToFile = (admins) => {
//   const data = `const admins = ${JSON.stringify(admins)}; module.exports = admins;`;

//   fs.writeFile('admins.js', data, (err) => {
//     if (err) {
//       console.error('Error writing admins.js:', err);
//     } else {
//       console.log('Admins saved successfully');
//     }
//   });
// };

// post endpoint for signup
// app.post('/auth/adminsignup', (req, res) => {
//   const { email, password } = req.body;

//   // Check if admin with the same email already exists
//   const existingAdmin = admins.find(admin => admin.email === email);

//   if (existingAdmin) {
//     res.status(400).json({ message: 'Admin with this email already exists' });
//   } else {
//     // Create new admin
//     admins.push({ email, password });
//     saveAdminsToFile(admins);
//     res.status(201).json({ message: 'Admin created successfully' });
//   }
// });

// app.get('/api/images', (req, res) => {
//   const imageDirectory = path.join(__dirname, 'uploads');
//   const imageFiles = fs.readdirSync(imageDirectory);
//   const imageUrls = imageFiles.map(filename => `/uploads/${filename}`);
//   res.json(imageUrls);
// });

// app.post('/api/upload', upload.array('images'), (req, res) => {
//   const files = req.files;
//   if (!files) {
//     return res.status(400).send('No files were uploaded.');
//   }

//   // Iterate through the uploaded files and save them to the uploads folder
//   files.forEach(file => {
//     const oldPath = file.path;
//     const newPath = path.join(__dirname, 'uploads', file.originalname);

//     // Rename the file and move it to the uploads folder
//     fs.rename(oldPath, newPath, err => {
//       if (err) {
//         console.error('Error saving file:', err);
//         return res.status(500).send('Error saving file.');
//       }
//     });
//   });

//   res.send('Images uploaded successfully!');
// });

app.post('/api/metadata', (req, res) => {
  const metadata = req.body;
  
  try {
    // Read existing metadata from metadata.js, if the file exists
    let existingMetadata = require('./metadata.js');

    // Merge existing metadata with new metadata
    const mergedMetadata = [...existingMetadata,...metadata];

    // Write merged metadata to metadata.js
    const metadataJs = `module.exports = ${JSON.stringify(mergedMetadata, null, 2)};`

    fs.writeFileSync('./metadata.js', metadataJs);

    res.send('Metadata saved successfully!');
  } catch (error) {
    console.error('Error writing metadata to metadata.js:', error);
    res.status(500).send('Error writing metadata to metadata.js.');
  } 
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});