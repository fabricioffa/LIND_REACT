import { QuestionBox } from '../QuestionBox';
import { Section } from '../Section';

export const FAQ = () => {
  return (
    <Section sectionName="faq" headerLevel={2}>
      <div className="questions-box">
        <QuestionBox
          questionText="Question 1"
          answerText="R: Some Answer for the question 1, but only displayed when question 1 has been clicked"
        />
        <QuestionBox
          questionText="Question 2"
          answerText="R: Some Answer for the question 1, but only displayed when question 2 has been clicked"
        />
        <QuestionBox
          questionText="Question 3"
          answerText="R: Some Answer for the question 1, but only displayed when question 3 has been clicked"
        />
        <QuestionBox
          questionText="Question 4"
          answerText="R: Some Answer for the question 1, but only displayed when question 4 has been clicked"
        />
        <QuestionBox
          questionText="Question 5"
          answerText="R: Some Answer for the question 1, but only displayed when question 5 has been clicked"
        />
      </div>
    </Section>
  );
};
