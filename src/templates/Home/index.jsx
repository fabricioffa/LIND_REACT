import { Intro } from '../../components/Intro';
import { NavBar } from '../../components/NavBar';
import './styles.css';

function Home() {
  return (
    <>
      <body>
        <NavBar />
        <Intro />
      </body>
    </>
  );
}

export default Home;
