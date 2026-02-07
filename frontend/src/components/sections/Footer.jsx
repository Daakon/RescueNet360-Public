import { Container } from '../primitives';
import { CONTACT } from '../../utils/constants';
import './Footer.css';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <div className="footer__brand">
            <h3 className="footer__brand-name">RescueNet360</h3>
            <p className="footer__tagline">Emergency Response Reimagined</p>
          </div>

          <div className="footer__links">
            <div className="footer__column">
              <h4 className="footer__column-title">Contact</h4>
              <a href={`mailto:${CONTACT.email}`} className="footer__link">
                {CONTACT.email}
              </a>
              <a href={`tel:${CONTACT.phone}`} className="footer__link">
                {CONTACT.phone}
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} RescueNet360. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
};
