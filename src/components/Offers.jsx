import React, { useState, useEffect } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { useNavigate } from 'react-router-dom';

const styles = {
  slide: {
    padding: 20,
    minHeight: 100,
    color: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  slideImage: {
    width: '50%',
    height: '50%',
    objectFit: 'cover',
  },
};

const Offers = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment index to move to the next slide
      setIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 2000); // Change the interval duration as needed

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

  const images = [
    'https://via.placeholder.com/600x400/FF5733/FFFFFF?text=Slide+1',
    'https://via.placeholder.com/600x400/6C3483/FFFFFF?text=Slide+2',
    'https://via.placeholder.com/600x400/1E8449/FFFFFF?text=Slide+3',
  ];

  return (
    <SwipeableViews index={index} onChangeIndex={(index) => setIndex(index)} enableMouseEvents>
      {images.map((imageUrl, i) => (
        <div key={i} style={{ ...styles.slide, backgroundImage: `url(${imageUrl})` }} onClick={() => navigate(`/slide/${i}`)}>
          <img src={imageUrl} alt={`Slide ${i + 1}`} style={styles.slideImage} />
        </div>
      ))}
    </SwipeableViews>
  );
}

export default Offers;
