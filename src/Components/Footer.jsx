// src/components/Footer.jsx
import React from 'react';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerMenu">
        <div className="leftFooter">
          <strong>Social medias </strong>
          <a target='_blank' className='addition' href="https://www.youtube.com/@njosuedev.">Youtube</a>
          <a target='_blank' className='addition' href="https://www.instagram.com/njosuedev/">Instagram</a>
          <a target='_blank' className='addition' href="https://github.com/njosuedev">Github</a>
          <a target='_blank' className='addition' href="https://web.facebook.com/NJosueDev/">Facebook</a>
          <a target='_blank' className='addition' href="mailto:njosueofficial@gmail.com">Send Email</a>

        </div>
        <div className="middleFooter">
          <strong>Technological skills </strong>
            <a target='_blank' className='addition' href="https://www.youtube.com/@njosuedev.">React.JS</a>
            <a target='_blank' className='addition' href="https://www.youtube.com/@njosuedev.">Node.JS</a>
            <a target='_blank' className='addition' href="https://www.youtube.com/@njosuedev.">Express.JS</a>
            <a target='_blank' className='addition' href="https://www.youtube.com/@njosuedev.">Nest.JS</a>
            <a target='_blank' className='addition' href="https://www.youtube.com/@njosuedev.">Next.JS</a>
        </div>
      </div>
      <small>&copy; 2024 n josue dev. All rights reserved.</small>
    </footer>
  );
};

export default Footer;
