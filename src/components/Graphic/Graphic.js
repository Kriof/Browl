import React from 'react';
import './Graphic.css';
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
class Graphic extends React.Component {

    render() {
        return (
        <div>
            <section className="Graphic">
                <div   className="gallery">
                <ImageGallery items={images} />
                </div>
                <h1>Grafika</h1>
            </section>
        </div>
        )
    }
}

export default Graphic;