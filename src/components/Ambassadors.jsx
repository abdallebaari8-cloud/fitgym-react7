import React from 'react';

import ambassadorImg3 from '../assets/img/Khabib.jpg';
import ambassadorImg4 from '../assets/img/cristiano ronaldo.jpg';
import ambassadorImg5 from '../assets/img/Anatoly.jpg';
const Ambassadors = () => {
  const ambassadors = [
    {
      id: 1,
      name: "khabib Nurmagomedov",
      title: "UFC Lightweight Division champion",
      image: ambassadorImg3
    },
    {
      id: 2,
      name: "Ronaldo",
      title: "Professional Footballer",
      image: ambassadorImg4
    },
    {
      id: 3,
      name: "Anatoly",
      title: "Elite Powerlifter",
      image: ambassadorImg5
    }
  ];

  return (
    <section className="ambassadors-section">
      <div className="max-w-7xl mx-auto">
        {/* Cinwaanka Qaybta */}
        <div className="mb-12">
          <h2 className="ambassadors-title">
            Our <span className="text-red">Ambassadors</span>
          </h2>
          <span className="ambassadors-subtitle">
            Collaborating with famous gym icons
          </span>
        </div>

        {/* Kaararka (Grid Layout) */}
        <div className="ambassadors-grid">
          {ambassadors.map((person) => (
            <div key={person.id} className="ambassador-card">
              {/* Sawirka */}
              <img 
                src={person.image} 
                alt={person.name}
              />
              
              {/* Overlay-ga CSS-ka ku jira */}
              <div className="ambassador-overlay">
                <div className="ambassador-info">
                  <h3>{person.name}</h3>
                  <p>{person.title}</p>
                  
                  {/* Button soo baxaya marka mouse-ka la saaro */}
                  <button className="view-btn">
                    VIEW PROFILE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Ambassadors;