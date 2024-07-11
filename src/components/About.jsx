import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css'; // Your custom CSS file for styling

const AlternateImageText = ({ items }) => {
  return (
    <div className="container mt-5">
      {items.map((item, index) => (
        <div key={index} className={`row ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
          
          <div className="col-md-6 d-flex align-items-center">
            <div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={item.image} alt={`Image ${index + 1}`} className="img-fluid about-img" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlternateImageText;
