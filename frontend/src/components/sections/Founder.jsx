import { Container, Heading, Text } from '../primitives';
import './Founder.css';

export const Founder = () => {
  return (
    <section className="founder">
      <Container>
        <div className="founder__grid">
          <div className="founder__image-wrapper">
            <img
              src="/images/team/misty-harrison.jpg"
              alt="Misty Harrison, Founder"
              className="founder__image"
              loading="lazy"
            />
          </div>
          <div className="founder__content">
            <Heading level={2}>Why This Became My Mission</Heading>
            <Text>
              When my dog went missing, I experienced the chaos firsthand. Shelters across town
              had no idea what each other had. Foster networks operated in isolation. Emergency
              responders couldn't access critical animal data during disasters.
            </Text>
            <Text>
              With two decades of enterprise experience at Microsoft and ADP, and having built
              AutoRealty (a platform that brought transparency to car buying), I knew this problem
              could be solved with the right technology.
            </Text>
            <Text>
              RescueNet360 isn't just software—it's a mission to build the first truly coordinated
              system that gives every shelter, rescue, and foster network the tools they need to
              save more lives.
            </Text>
            <p className="founder__signature">— Misty Harrison, Founder</p>
          </div>
        </div>
      </Container>
    </section>
  );
};
