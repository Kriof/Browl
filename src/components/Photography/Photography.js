import React from 'react';
import './Photography.css';
import ImageGallery from 'react-image-gallery';
const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
function Photography() {
    return (
        <div>
            <section className="Photography">
                <div className="gallery">
                <ImageGallery items={images} />
                </div>
                <h1>Fotografia</h1>
            </section>
        </div>
    );
}

export default Photography;