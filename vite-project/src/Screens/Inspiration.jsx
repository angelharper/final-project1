import React, { useState, useEffect } from 'react';
import Header from '../Component/Navigation/Header';
import BasicModal from '../Component/Modal/Modal';
import { fetchMetadata } from '../Component/Service/metadataService';
import image from "../assets/image1.jpeg";
import './style.css';
function Inspiration() {
  const [imagePreviews, setImagePreviews] = useState([]);
  const [metadata, setMetadata] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const metadata = await fetchMetadata();
        setMetadata(metadata);
      } catch (error) {
        console.error('Error fetching metadata:', error);
      }
    }
    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredImages = selectedCategory
    ? metadata.filter((image) => image.tags.includes(selectedCategory) && (image.code.includes("1") || image.code.includes("2")))
    : metadata;

    const filteredImageCode1 = selectedCategory
    ? metadata.filter((image) => image.tags.includes(selectedCategory) && (image.code.includes("1")))
    : metadata;

    const filteredImageCode2 = selectedCategory
    ? metadata.filter((image) => image.tags.includes(selectedCategory) && (image.code.includes("2")))
    : metadata;

  // Shuffle the filtered images array if needed
const shuffledImages = shuffleArray(filteredImages);
const shuffledCode1 = shuffleArray(filteredImageCode1);
const shuffledCode2 = shuffleArray(filteredImageCode2);

// Function to shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

  return (
      <div
        style={{
          width: '100%',
          height: '160vh',
          // backgroundImage: `url(${image})`, // Assuming 'image' is imported elsewhere
          // backgroundSize: 'contain',
          // backgroundPosition: 'center',
          // display: 'flex',
          flexDirection: 'column',
          // opacity: 0.8
        }}
      >
        <div
          style={{
            flex: '.2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingTop: '17.5px'
          }}
        >
          <Header />
        </div>

        <div
          style={{
            // flex: '.7',
            display: 'flex',
            flexDirection: 'column',
            backgroundImage: `url(${image})`,
          }}
        >
          <div
            style={{
              // flex: '.2',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h1>Categories</h1>
          </div>
          <div
            style={{
              flex: '.8',
              display: 'flex',
              flexWrap: 'wrap',
              padding: '15px',
              flexDirection: 'row',
              gap: 50,
              justifyContent: 'center',
            }}
          >
            <ul><button className="button button-orange" onClick={() => handleCategoryClick('formal')}><li>Formal</li></button></ul>
            <ul><button className="button button-orange" onClick={() => handleCategoryClick('casual')}>Casual</button></ul>
            <ul><button className="button button-orange" onClick={() => handleCategoryClick('picnic')}>Picnic</button></ul>
            {/* <ul><button className="button button-orange" onClick={() => handleCategoryClick('beach')}>Beach</button></ul> */}
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', flexDirection: "column", alignItems: 'center', gap: 30 }}>
          {shuffledImages.slice(0,2).map((image, index) => (
            <img
              key={index}
              src={`http://localhost:3000${image.imageURL}`}
              content={image.tags.join(', ')}
              style={{ width: '200px', height: '200px' }}
            />
          ))}
        </div>
        </div>
      </div>
    
  );
}

export default Inspiration;
