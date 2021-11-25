import { Icon } from '../Icon';

import facebookLogo from '../../imgs/facebook_logo_icon.png';
import instagramLogo from '../../imgs/instagram_logo_icon.png';
import linkedinLogo from '../../imgs/linkedin_logo_icon.png';
import youtubeLogo from '../../imgs/logo_youtube_icon.png';
import twitterLogo from '../../imgs/logo_twitter_icon.png';

export const IconsList = () => {
  return (
    <ul>
      <Icon link="#" imgSrc={facebookLogo} imgAlt="Facebook logo" />
      <Icon link="#" imgSrc={instagramLogo} imgAlt="Instragram logo" />
      <Icon link="#" imgSrc={linkedinLogo} imgAlt="Linkedin logo" />
      <Icon link="#" imgSrc={youtubeLogo} imgAlt="Youtube logo" />
      <Icon link="#" imgSrc={twitterLogo} imgAlt="Twitter logo" />
    </ul>
  );
};
