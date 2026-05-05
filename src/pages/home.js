import React, { useEffect } from 'react';
import './Home.css';
// 1. Soo dhex geli qaybta Ambassadors (Hubi path-ka inuu sax yahay)
import Ambassadors from '../components/Ambassadors';

// Import-yada sawirrada
import img1 from '../assets/img/cardio.jpg';
import img2 from '../assets/img/weights.jpg';
import img3 from '../assets/img/strength.jpg';
import img4 from '../assets/img/racks.jpg';
import img5 from '../assets/img/bigarea.jpg';
import img6 from '../assets/img/benchpress.jpg';
import img7 from '../assets/img/Punchingbages.jpg';
import img8 from '../assets/img/recoverybags.jpg';
import img9 from '../assets/img/legpress.jpg';
import img10 from '../assets/img/cablecrossover.jpg';
import img11 from '../assets/img/rowingmachines.jpg';
import img12 from '../assets/img/pullupbar.jpg';

function Home() {
  const equipments = [
    { id: 1, name: 'Cardio Machines', desc: 'Treadmills and Stationary Bikes', img: img1 },
    { id: 2, name: 'Weights', desc: 'Professional Dumbbells and Barbells', img: img2 },
    { id: 3, name: 'Strength Machines', desc: 'Isolated muscle targeting equipment', img: img3 },
    { id: 4, name: 'Power Racks', desc: 'Heavy-duty squats and bench press', img: img4 },
    { id: 5, name: 'Crossfit Area', desc: 'Ropes, tires, and kettlebells', img: img5 },
    { id: 6, name: 'Bench Press', desc: 'Premium mats and stability balls', img: img6 },
    { id: 7, name: 'Punching Bags', desc: 'Boxing and MMA training equipment', img: img7 },
    { id: 8, name: 'Recovery Zone', desc: 'Foam rollers and massage tools', img: img8 },
    { id: 9, name: 'Leg Press', desc: 'Heavy leg day essentials', img: img9 },
    { id: 10, name: 'Cable Crossover', desc: 'Versatile cable machine for full body', img: img10 },
    { id: 11, name: 'Rowing Machines', desc: 'Full body endurance workout', img: img11 },
    { id: 12, name: 'Pull-up Stations', desc: 'Calisthenics and bodyweight area', img: img12 }
  ];

  // 2. HANNAANKA USEEFFECT 
  useEffect(() => {
    console.log("Bogga FitGym waa diyaar!");
    document.title = "FitGym | Best Training Equipment";
  }, []); 

  // Kani waa return-ka kaliya ee shaqaynaya
  return (
    <div className="home-container">
      {/* Hero Section */}
      <div className="hero-section" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80')` }}>
        <div className="hero-content">
          <h1 className="quote">"STRENGTH DOES NOT COME FROM PHYSICAL CAPACITY. IT COMES FROM AN INDOMITABLE WILL."</h1>
          <p>Ku soo dhowow FitGym - Meesha isbadalka jirkaga ka bilaawdo.</p>
          <button className="btn-red">Get Started Today</button>
        </div>
      </div>

      {/* Equipment Section */}
      <section className="equipment-section">
        <h2 className="section-title">OUR <span className="text-red">EQUIPMENT</span></h2>
        <div className="equipment-grid">
          {equipments.map((item) => (
            <div key={item.id} className="equipment-card">
              <img src={item.img} alt={item.name} />
              <div className="overlay">
                <h3>{item.name}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Qeybta Ambassadors */}
      <Ambassadors />
      
    </div>
  );
} // Halkan ayuu ku xirmayaa function-ka Home

export default Home;