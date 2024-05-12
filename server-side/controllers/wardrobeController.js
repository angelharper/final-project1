const User = require('../models/User');
const { Storage } = require("@google-cloud/storage");
const axios = require("axios");
const { format } = require("util");


const storage = new Storage();
const bucketName = "style-wizzard";

const bucket = storage.bucket(bucketName);

const multer = require("multer");
const multerStorage = multer.memoryStorage();
const upload = multer({ storage: multerStorage }).single("image");

module.exports = {
    uploadImage: async (req, res) => {
        
        try {
            upload(req, res, async function (err) {
                if (err) {
                    console.error("Error uploading image:", err);
                    return res.status(400).json({ error: "Error uploading image" });
                }
            
            
            const apiUrl = "https://storage.googleapis.com/";

            const file = req.file;
            if (!file) {
                return res.status(400).json({ error: "No file uploaded" });
            }

            const blob = bucket.file(file.originalname);
            const blobStream = blob.createWriteStream();

            blobStream.on("error", (err) => {
                console.error("Error uploading to GCS:", err);
                return res.status(500).json({ error: "Error uploading image" });
            });

            blobStream.on("finish", () => {
                const publicUrl = format(
                    `https://storage.googleapis.com/${bucket.name}/${blob.name}`
                );
                console.log(publicUrl);
                return res.status(200).json({ url: publicUrl });
            });

            blobStream.end(file.buffer);
        })
            // Get the public URL of the uploaded file
            // const publicUrl = `https://storage.googleapis.com/${bucketName}/${uploadedFile.name}`;
            // const publicUrl = uploadedFile.metadata.mediaLink;

            // const response = await axios.post(apiUrl, {
            //     url: publicUrl,
            // });
            

            // res.json(response.data);
        } catch (error) {
            console.error("Error uploading image:", error);
            res.status(500).json({ error: "Error uploading image" });
        }
    }

};