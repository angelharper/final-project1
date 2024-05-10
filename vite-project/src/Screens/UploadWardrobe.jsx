import React, {useState, useEffect} from 'react';
import Header from '../Component/Navigation/Header';
import image from "../assets/image1.jpeg";
import './style.css';
import axios from 'axios';
import DisplayUploadedImages from '../Component/DisplayUploadedImages';



function UploadWardrobe() {

    const [imagePreviews, setImagePreviews] = useState([]);
    const [imageName, setImageName] = useState("");
    const [selectedTags, setSelectedTags] = useState([]);
    const [selectedCode, setSelectedCode] = useState("");

    useEffect(() => {}, [imagePreviews]);

    const handleTagSelection = (event) => {
        const tag = event.target.value;
        
        if (event.target.checked){
            setSelectedTags([...selectedTags, tag]);
        } else {
            setSelectedTags(selectedTags.filter(t => t !== tag));
        }
        
    };

    const handleCodeSelection = (event) => {
        const code = event.target.value;
        
        if (event.target.checked){
            setSelectedCode([...selectedCode, code]);
        } else {
            setSelectedCode(selectedCode.filter(t => t !== code));
        }
        
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        //Capture the uploads
        const files = document.getElementById('imageInput').files;

        // check if files were uploaded
        if (files.length === 0){
            alert('Please select at least one image to upload.')
            return;
        }

        // Prepare FormData object to send files to server
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('images', files[i]);
        }

        // Send files to server-side API
        const response = await fetch('http://localhost:3000/api/upload', {
            method: 'POST',
            body: formData,
        });

        if (!response.ok) {
            alert('Failed to upload images');
            return;
          }

        // Generate metadata for each image
        const imageMetadata = [];
        for (let i = 0; i < files.length; i++) {
            const imageFile = files[i];
            const imageName = imageFile.name;
            const imageUrl = `/uploads/${imageName}`;
            
            imageMetadata.push({
                name: imageName,
                tags: selectedTags,
                code: selectedCode,
                imageURL: imageUrl,
              });
        }


        // Send metadata to server-side API
        const metadataResponse = await fetch('http://localhost:3000/api/metadata', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify(imageMetadata),
        });

        if (!metadataResponse.ok) {
            alert('Failed to save metadata');
            return;
        }

        // Reset form fields or provide feedback to the user
        setImageName('');
        setSelectedTags([]);
        setSelectedCode('');
        setImagePreviews([]);
        document.getElementById('imageInput').value = ''; // Clear file input field
        alert('Images uploaded successfully!');
    };

    // Function to handle change in input field
    // const handleTagsChange = (event) => {
    //     setImageTags(event.target.value);
    // };
    
    const handleImageChange = (event) => {
        const files = event.target.files;
        const previews = [];
    
        for (let i = 0; i< files.length; i++) {
            const file = files[i];
    
            if (file) {
                const reader = new FileReader();
                reader.onload = function () {
                  previews.push(reader.result);
                  setImagePreviews([...previews]);
                };
                reader.readAsDataURL(file);
              }
        }
    };

    return (
        <div className="sm:w-[100%] sm:h-[100vh]"
        style={{
          width: "100%",
          minHeight: "100vh",
          //   background: "peru",
          display: "flex",
          flexDirection: "column",
          backgroundImage: `url(${image})`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",}}>
            <div>

            </div>
            <div style={{flex: "0.15", display: "flex", flexDirection: "row", paddingTop: '17.5px'}}>
                <Header/>
            </div>
            <div>
                <div style={{flex: ".85", display: "flex", justifyContent: "center"}}>
                <h1 >Upload Your Wardrobe</h1>
                </div>
                <div className="upload-container">
                    <form onSubmit={handleSubmit}>
                        <div>
                        <label htmlFor='file'><h3>Upload an Image</h3></label>
                            <input
                            type='file'
                            id='imageInput'
                            name='imageUpload'
                            accept='image/*'
                            multiple
                            onChange={handleImageChange}
                            />
                        </div>
                        <div>
                        <label htmlFor='name'><h3>Give your Image a name</h3></label>
                            <input
                            type="text"
                            value={imageName}
                            onChange={(event) => setImageName(event.target.value)}
                            placeholder="Enter a name for the image"
                            />
                        </div>
                        <div className='tag-list-container'>
                        <label htmlFor='tags'><h3>Select Tags</h3></label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="formal"
                                    checked={selectedTags.includes("formal")}
                                    onChange={handleTagSelection}
                                />
                                <span style={{paddingLeft: '10px'}}>Formal</span>
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="casual"
                                    checked={selectedTags.includes("casual")}
                                    onChange={handleTagSelection}
                                />
                                <span style={{paddingLeft: '10px'}}>Casual</span>
                                
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="picnic"
                                    checked={selectedTags.includes("picnic")}
                                    onChange={handleTagSelection}
                                />
                                <span style={{paddingLeft: '10px'}}>Picnic</span>
                                
                            </label>
                            {/* <label>
                                <input
                                    type="checkbox"
                                    value="beach"
                                    checked={selectedTags.includes("beach")}
                                    onChange={handleTagSelection}
                                />
                                <span style={{paddingLeft: '10px'}}>Beach</span>
                                
                            </label> */}
                        <div className='tag-list-container'>
                        <label htmlFor='code'><h3>Select Image Code</h3></label>
                        <label>
                                <input
                                    type="checkbox"
                                    value="1"
                                    checked={selectedCode.includes("1")}
                                    onChange={handleCodeSelection}
                                />
                                <span style={{paddingLeft: '10px'}}>Upper body wear</span>
                                
                            </label>
                            <label>
                                <input
                                    type="checkbox"
                                    value="2"
                                    checked={selectedCode.includes("2")}
                                    onChange={handleCodeSelection}
                                />
                                <span style={{paddingLeft: '10px'}}>Lower body wear</span>
                                
                            </label>
                            </div>
                        </div>
                        <button type='submit'>Upload</button>
                    </form>
                </div>
                
                {/* <div id='preview'>
                    <div style={{display: "flex", flexDirection: "row"}}>
                        {imagePreviews.map((preview, index) => (
                            <img
                            width="20%"
                            height="200vh"
                            key={index}
                            src={preview}
                            alt={`Image Preview ${index}`}
                            />
                        ))}
                    </div>
                </div> */}
            {/* <button onClick={() => handleImageSelection(imageTages)}>Select Images</button> */}
            </div>
            <div style={{marginLeft: "80px"}}>
                    <div style={{flex: ".85", display: "flex", justifyContent: "center", marginTop: "80px"}}>
                        <h1>Existing Wardrobe</h1>
                    </div>
                    <div>
                        <DisplayUploadedImages/>
                    </div>
                </div>
        </div>    
  )
}

export default UploadWardrobe;