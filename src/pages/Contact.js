import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <h1>CONTACT <span className="text-red">US</span></h1>
        <p>Nala soo xiriir si aad u bilowdo isbedelka jirkaga!</p>
      </div>

      <div className="contact-content">
        {/* Qaybta Macluumaadka */}
        <div className="contact-info">
          <div className="info-item">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Ciwaanka</h3>
            <p>Mogadishu, Somalia (Deynile District)</p>
          </div>
          <div className="info-item">
            <i className="fas fa-phone"></i>
            <h3>Taleefanka</h3>
            <p>+252 61 645 55 50</p>
          </div>
          <div className="info-item">
            <i className="fas fa-envelope"></i>
            <h3>Email-ka</h3>
            <p>info@fitgym.so</p>
          </div>
        </div>

        {/* Qaybta Fariin Dirista (Form) */}
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Magacaaga oo buuxa" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email-kaaga" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Fariintaada..." rows="5" required></textarea>
          </div>
          <button type="submit" className="btn-submit">DIR FARIINTA</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;