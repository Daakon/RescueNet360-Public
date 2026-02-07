import {
  Hero,
  Problem,
  Founder,
  Solution,
  Technology,
  Market,
  Team,
  Footer,
} from './components/sections';
import { WaitlistForm } from './components/forms';
import './App.css';

function App() {
  return (
    <div className="app">
      <Hero />
      <Problem />
      <Founder />
      <Solution />
      <Technology />
      <Market />
      <Team />
      <WaitlistForm />
      <Footer />
    </div>
  );
}

export default App;
