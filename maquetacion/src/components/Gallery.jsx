import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    'https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/vite-es-ahora-el-paquete-de-activos-de-frontend-por-defecto-para-las-aplicaciones-de-laravel.jpg',
    'https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/vite-es-ahora-el-paquete-de-activos-de-frontend-por-defecto-para-las-aplicaciones-de-laravel.jpg',    'https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/vite-es-ahora-el-paquete-de-activos-de-frontend-por-defecto-para-las-aplicaciones-de-laravel.jpg',    'https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/vite-es-ahora-el-paquete-de-activos-de-frontend-por-defecto-para-las-aplicaciones-de-laravel.jpg',    'https://codersfree.nyc3.cdn.digitaloceanspaces.com/posts/vite-es-ahora-el-paquete-de-activos-de-frontend-por-defecto-para-las-aplicaciones-de-laravel.jpg',
  
  ];

  return (
    <main className="main">
      <div className="gallery">
        {images.map((url, index) => (
          <img key={index} src={url} alt={`Gallery item ${index}`} />
        ))}
      </div>
    </main>
  );
};

export default Gallery;