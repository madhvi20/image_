import React, { useEffect, useRef, useState } from 'react';
import ImageComponent from './ImageComponent';
import './InfiniteScrollGallery.css';

const InfiniteScrollGallery = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const loader = useRef(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=10`);
        const newImages = await response.json();
        setImages((prev) => [...prev, ...newImages]);
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      },
      { threshold: 1.0 }
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  return (
    <div className="infinite-scroll-gallery">
      {images.map((image, index) => (
        <ImageComponent key={index} src={image.download_url} alt={image.author} />
      ))}
      <div ref={loader} className="loading">Loading...</div>
    </div>
  );
};

export default InfiniteScrollGallery;
