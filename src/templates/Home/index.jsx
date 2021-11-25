import { Books } from '../../components/Books';
import { Contact } from '../../components/Contact';
import { Courses } from '../../components/Courses';
import { FAQ } from '../../components/FAQ';
import { Footer } from '../../components/Footer';
import { Intro } from '../../components/Intro';
import { NavBar } from '../../components/NavBar';
import { Podcasts } from '../../components/Podcasts';
import './styles.css';

function Home() {
  return (
    <>
      <NavBar />
      <Intro />
      <Courses />
      <Books />
      <Podcasts />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;
