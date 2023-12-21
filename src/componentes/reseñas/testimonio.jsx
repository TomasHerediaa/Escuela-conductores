import React from 'react';
import './testimonio.css'; // Añade estilos según tus necesidades

const TestimonialCard = ({ testimonial }) => {
  const { name, image, rating, content } = testimonial;

  return (
    <div className="testimonial-card">
      <img src={image} alt={name} className="profile-image" />
      <h3 className="name">{name}</h3>
      <div className="rating">
        {[...Array(rating)].map((_, index) => (
          <span key={index}>&#9733;</span>
        ))}
      </div>
      <p className="content">{content}</p>
    </div>
  );
};

export default TestimonialCard;