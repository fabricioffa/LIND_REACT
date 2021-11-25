import { Grid } from '../Grid';
import { Product } from '../Product';
import { Section } from '../Section';
import { SlideBtn } from '../SlideBtn';

import books from '../../imgs/books.jpeg';

export const Books = () => {
  return (
    <Section sectionName="books" headerLevel={2}>
      <SlideBtn direction="right" />
      <Grid gridName="books">
        <Product name="Book 1" imgSrc={books} imgAlt="Book image" price="$ 50,00" link="./product.html" />
        <Product name="Book 2" imgSrc={books} imgAlt="Book image" price="$ 50,00" link="./product.html" />
        <Product name="Book 3" imgSrc={books} imgAlt="Book image" price="$ 50,00" link="./product.html" />
        <Product name="Book 4" imgSrc={books} imgAlt="Book image" price="$ 50,00" link="./product.html" />
        <Product name="Book 5" imgSrc={books} imgAlt="Book image" price="$ 50,00" link="./product.html" />
        <Product name="Book 6" imgSrc={books} imgAlt="Book image" price="$ 50,00" link="./product.html" />
        <Product name="Book 7" imgSrc={books} imgAlt="Book image" price="$ 50,00" link="./product.html" />
        <Product name="Book 8" imgSrc={books} imgAlt="Book image" price="$ 50,00" link="./product.html" />
        <Product name="Book 9" imgSrc={books} imgAlt="Book image" price="$ 50,00" link="./product.html" />
      </Grid>
      <SlideBtn direction="left" />
    </Section>
  );
};
