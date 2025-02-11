import AboutImage from '../../assets/about-me-pic.jpg';
import CV from '../../assets/cv.pdf';
import {HiDownload} from 'react-icons/hi';
// import Card from '../../components/Card';
// import data from './data';
import './about.css';

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="A portrait of myself" />
          </div>
        </div>
        <div className="about__right">
          <h2 className="about__header">About Me</h2>
          {/* <div className="about__cards">
            {
              data.map(item => {
                return <Card key={item.id} className='about__card'>
                  <span className='about__card-icon'>{item.icon}</span>
                  <h5>{item.title}</h5>
                  <small>{item.desc}</small>
                </Card>
              })
            }
          </div> */}
          <p>
            Hi, I'm a full-stack web developer. My top priority is to get your
            business online the right way, giving you industry-standard design
            and all the functionality you need to operate smoothly online. Get
            in touch today with the details of your project let's get started!
            Check out my resume below!
          </p>
          <p>
            Outside of development, I enjoy cooking, playing guitar, and
            unwinding with a good video game. I bring enthusiasm and dedication
            to everything I do, both professionally and personally. As a father,
            I’ve learned the importance of patience, adaptability, and finding
            joy in life’s little moments. Whether it’s building meaningful
            projects or cherishing time with loved ones, I believe in being
            present, continuously growing, and always striving to create
            something truly valuable.
          </p>
          <a href={CV} download className="btn primary">
            Download CV <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;