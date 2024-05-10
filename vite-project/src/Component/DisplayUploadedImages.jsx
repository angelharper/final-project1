import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DisplayUploadedImages() {
    const [imageUrls, setImageUrls] = useState([]);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/images');
                setImageUrls(response.data);
            } catch (error) {
                console.error('Error fetching images:', error);
            }
        };

        fetchImages();
    }, []);

    return (
        <div>
            {/* <h1>Uploaded Images</h1> */}
            <div className="image-gallery">
                {imageUrls.map((url, index) => (
                    <img
                        key={index}
                        src={`http://localhost:3000${url}`}
                        alt={`Image ${url}`}
                        style={{ width: '200px', height: 'auto', margin: '10px' }}
                    />
                ))}
            </div>
        </div>
    );
}

export default DisplayUploadedImages;
