import { Container } from '../primitives';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer__content">
          <p className="footer__text">
            &copy; 2025 RescueNet360. Innovation That Saves Lives.
          </p>
        </div>
      </Container>
    </footer>
  );
};
