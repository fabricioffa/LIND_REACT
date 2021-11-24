import { Books } from '../../components/Books';
import { Courses } from '../../components/Courses';
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
    </>
  );
}

export default Home;
