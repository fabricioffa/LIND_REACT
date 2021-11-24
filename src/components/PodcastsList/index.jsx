import P from 'prop-types';
import { Podcast } from '../Podcast';

export const PodcastsList = ({ link, name }) => {
  return (
    <div className="grid-item">
      <h4>
        <a href={link}>{name}</a>
      </h4>
      <ul>
        <Podcast link="#" text="Podcast 1" />
        <Podcast link="#" text="Podcast 2" />
        <Podcast link="#" text="Podcast 3" />
        <Podcast link="#" text="Podcast 4" />
        <Podcast link="#" text="Podcast 5" />
        <Podcast link="#" text="Podcast 6" />
        <Podcast link="#" text="Podcast 7" />
      </ul>
    </div>
  );
};

PodcastsList.propTypes = {
  name: P.string.isRequired,
  link: P.string.isRequired,
};
