import { Form } from '../Form';
import { Section } from '../Section';

export const Contact = () => {
  return (
    <Section sectionName="contact" headerLevel={2}>
      <Form>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" placeholder="Marcus" id="name" />
        <label htmlFor="surname">Surname:</label>
        <input type="text" name="surname" placeholder="Cicerus" id="surname" />
        <label htmlFor="country">Country:</label>
        <input type="text" name="country" placeholder="Roma" id="country" />
        <label htmlFor="email">E-mail:</label>
        <input type="text" name="emai" placeholder="marcuscicerus@email.com" id="email" />
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          cols="30"
          rows="10"
          placeholder="Mitto tibi navem prora puppique carentem..."
          id="message"
        ></textarea>
      </Form>
    </Section>
  );
};
