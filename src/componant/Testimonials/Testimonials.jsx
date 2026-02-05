import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";
import data from "./data";

const Testimonials = () => {
  const sliderRef = useRef(null);
  const [index, setIndex] = useState(0);

  const getCardsPerView = () => {
    const w = window.innerWidth;
    if (w <= 390) return 1;
    if (w <= 922) return 2;
    return 3;
  };

  const slide = (dir = 1) => {
    const cards = getCardsPerView();
    const maxIndex = Math.max(0, data.length - cards);

    setIndex((prev) => {
      let next = prev + dir;
      if (next < 0) return maxIndex;
      if (next > maxIndex) return 0;
      return next;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => slide(1), 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (!sliderRef.current || !sliderRef.current.children.length) return;
    const cardWidth = sliderRef.current.children[0].offsetWidth + 80;
    sliderRef.current.style.transform = `translateX(-${index * cardWidth}px)`;
  }, [index]);

  return (
    <section className="testimonials">
      <div className="testimonials-header">
        <img src="/Real_Estate_X4//assets/icons/homepage/testo/sparkling.svg" alt="" />
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="body">
          Read the success stories and heartfelt testimonials from our valued clients.
        </p>
      </div>

      <div className="slider-wrapper">
        <div className="slider" ref={sliderRef}>
          {data.map((item) => (
            <div className="testimonial-card" key={item.id}>
              <div className="stars">
                {Array(item.rating)
                  .fill(0)
                  .map((_, i) => (
                    <div className="star" key={i}>
                      <img
                        src="/Real_Estate_X4//assets/icons/homepage/testo/shine-star.svg"
                        alt=""
                      />
                    </div>
                  ))}
              </div>

              <h3 className="subheading-2">
                {item.quote.split(".")[0]}.
              </h3>
              <p className="body">{item.quote}</p>

              <div className="user">
                <img src={item.image} alt={item.name} />
                <div>
                  <strong>{item.name}</strong>
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
<div className="cards-bottom-line"></div>

 <div className="cards-bottom-line"></div>

        <div className="slider-controls">
          <button onClick={() => slide(-1)}>
            <img src="/Real_Estate_X4//assets/icons/homepage/testo/arrow-left.svg" alt="" />
          </button>
          <button onClick={() => slide(1)}>
            <img src="/Real_Estate_X4//assets/icons/homepage/testo/arrow-right.svg" alt="" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;