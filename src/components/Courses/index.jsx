import { Grid } from '../Grid';
import { Product } from '../Product';
import { Section } from '../Section';
import { SlideBtn } from '../SlideBtn';

export const Courses = () => {
  return (
    <Section sectionName="courses" headerLevel="2">
      <SlideBtn direction="right" />
      <Grid>
        <Product
          name="Literature and History"
          imgSrc="../../../public/img/book-pile.jpeg"
          imgAlt="Grammar course image"
          price="$ 50,00"
          link="./product.html" />
      </Grid>
    </Section>
  );
};
