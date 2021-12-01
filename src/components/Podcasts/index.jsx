import { Grid } from '../Grid';
import { PodcastsList } from '../PodcastsList';
import { Section } from '../Section';
import { SlideBtn } from '../SlideBtn';

export const Podcasts = () => {
  return (
    <Section sectionName="podcast" headerLevel={2}>
      <SlideBtn direction="right" />
      <Grid gridName="podcasts">
        <PodcastsList link="#" name="Begginer" />
        <PodcastsList link="#" name="Intermediary" />
        <PodcastsList link="#" name="Advanced" />
      </Grid>
      <SlideBtn direction="left" />
    </Section>
  );
};
