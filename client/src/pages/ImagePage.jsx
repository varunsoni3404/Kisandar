import React, { useState } from 'react';

const ImagePage = () => {
  const [images, setImages] = useState([]);

  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => prevImages.concat(newImages));
  };

  return (
    <div className="bg-green-100 min-h-screen p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Nature Image Gallery</h1>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        className="block mx-auto mb-6 border border-green-400 p-2 rounded"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={image} alt={`Uploaded ${index}`} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold">Image {index + 1}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagePage;