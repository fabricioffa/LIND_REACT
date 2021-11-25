import { Grid } from '../Grid';
import { Product } from '../Product';
import { Section } from '../Section';
import { SlideBtn } from '../SlideBtn';

import bookImg from '../../imgs/book-pile.jpeg';

export const Courses = () => {
  return (
    <Section sectionName="courses" headerLevel={2}>
      <SlideBtn direction="right" />
      <Grid gridName="courses">
        <Product
          name="Literature and History"
          imgSrc={bookImg}
          imgAlt="Grammar course image"
          price="$ 50,00"
          link="./product.html"
        />
        <Product name="Poetry" imgSrc={bookImg} imgAlt="Grammar course image" price="$ 50,00" link="./product.html" />
        <Product
          name="Vocabulary"
          imgSrc={bookImg}
          imgAlt="Grammar course image"
          price="$ 50,00"
          link="./product.html"
        />
        <Product
          name="Grammar: Begginer"
          imgSrc={bookImg}
          imgAlt="Grammar course image"
          price="$ 50,00"
          link="./product.html"
        />
        <Product
          name="Grammar: Intermediary"
          imgSrc={bookImg}
          imgAlt="Grammar course image"
          price="$ 50,00"
          link="./product.html"
        />
        <Product
          name="Grammar: Advanced"
          imgSrc={bookImg}
          imgAlt="Grammar course image"
          price="$ 50,00"
          link="./product.html"
        />
      </Grid>
      <SlideBtn direction="left" />
    </Section>
  );
};
