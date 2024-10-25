import React from 'react';

const ImageComponent = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} loading="lazy" />
    </div>
  );
};

export default ImageComponent;
