'use client';
import LightGallery from 'lightgallery/react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import ScrollFadeIn from './common/ScrollFadeIn';

const Gallery = () => {
  const onInit = () => {
    console.log('lightGallery has been initialized');
  };

  const images = [
    {
      id: '1',
      size: '1200-1800',
      src: '/images/wedding1.jpg',
      thumb: '/images/wedding1.jpg',
    },
    {
      id: '2',
      size: '1200-1800',
      src: '/images/wedding2.jpg',
      thumb: '/images/wedding2.jpg',
    },
    {
      id: '3',
      size: '1200-1800',
      src: '/images/wedding3.jpg',
      thumb: '/images/wedding3.jpg',
    },
    {
      id: '4',
      size: '1200-1800',
      src: '/images/wedding4.jpg',
      thumb: '/images/wedding4.jpg',
    },
    {
      id: '5',
      size: '1200-1800',
      src: '/images/wedding5.jpg',
      thumb: '/images/wedding5.jpg',
    },
    {
      id: '6',
      size: '1200-1800',
      src: '/images/wedding6.jpg',
      thumb: '/images/wedding6.jpg',
    },
    {
      id: '7',
      size: '1200-1800',
      src: '/images/wedding7.jpg',
      thumb: '/images/wedding7.jpg',
    },
    {
      id: '8',
      size: '1200-1800',
      src: '/images/wedding8.jpg',
      thumb: '/images/wedding8.jpg',
    },
    {
      id: '9',
      size: '1200-1800',
      src: '/images/wedding9.jpg',
      thumb: '/images/wedding9.jpg',
    },
    {
      id: '10',
      size: '1200-1800',
      src: '/images/wedding10.jpg',
      thumb: '/images/wedding10.jpg',
    },
    {
      id: '11',
      size: '1200-1800',
      src: '/images/wedding11.jpg',
      thumb: '/images/wedding11.jpg',
    },
    {
      id: '12',
      size: '1200-1800',
      src: '/images/wedding12.jpg',
      thumb: '/images/wedding12.jpg',
    },
    {
      id: '13',
      size: '1200-1800',
      src: '/images/wedding13.jpg',
      thumb: '/images/wedding13.jpg',
    },
  ];

  return (
    <div className="App p-8">
      <ScrollFadeIn>
        <h3>Gallery</h3>
      </ScrollFadeIn>
      <LightGallery
        onInit={onInit}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        elementClassNames="grid grid-cols-2 gap-2"
      >
        {images.map((image, index) => (
          <a
            key={index}
            href={image.src}
            data-src={image.src}
            data-lg-size={image.size}
            className="w-full h-60"
          >
            <img
              alt={`wedding${index + 1}`}
              src={image.src}
              className="w-full h-full object-cover object-top shadow-md hover:shadow-lg transition-shadow duration-300"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
};

export default Gallery;
