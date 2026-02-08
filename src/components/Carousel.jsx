import React, { useState, useEffect, useRef } from 'react';

const Carousel = () => {
  const [items, setItems] = useState([
    { id: 1, img: "images/image1.jpg", author: "Mantu", title: "HealthyCare", topic: "system" },
    { id: 2, img: "images/image2.jpg", author: "Mantu", title: "BEST", topic: "Endocrinologist" },
    { id: 3, img: "images/image3.jpeg", author: "Mantu", title: "BEST", topic: "Ophthalmologist" },
    { id: 4, img: "images/image4.jpg", author: "Mantu", title: "BEST", topic: "Psychologist" },
  ]);

  const [type, setType] = useState('');
  const autoNextRef = useRef(null);

  const showSlider = (direction) => {
    if (autoNextRef.current) clearTimeout(autoNextRef.current);
    setType(direction);

    setTimeout(() => {
      if (direction === 'next') {
        setItems((prev) => [...prev.slice(1), prev[0]]);
      } else {
        setItems((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
      }
      setType('');
    }, 500); 
  };

  useEffect(() => {
    autoNextRef.current = setTimeout(() => showSlider('next'), 7000);
    return () => clearTimeout(autoNextRef.current);
  }, [items]);

  return (
    <div className={`carousel ${type}`}>
      <div className="list">
        {items.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt={item.title} />
            <div className="content">
              <div className="author">{item.author}</div>
              <div className="title">{item.title}</div>
              <div className="topic">{item.topic}</div>
              <div className="des">
                “A good healthcare system treats illness; a great one prevents it.”
              </div>
              <div className="buttons">
                <button>SEE MORE</button>
                <button>SUBSCRIBE</button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="thumbnail">
        {items.map((item) => (
          <div className="item" key={`thumb-${item.id}`}>
            <img src={item.img} alt="thumb" />
            <div className="content">
              <div className="title">Health care</div>
              <div className="des">Description</div>
            </div>
          </div>
        ))}
      </div>

      <div className="arrows">
        <button id="prev" onClick={() => showSlider('prev')}>{"<"}</button>
        <button id="next" onClick={() => showSlider('next')}>{">"}</button>
      </div>
      <div className="time"></div>
    </div>
  );
};

export default Carousel;