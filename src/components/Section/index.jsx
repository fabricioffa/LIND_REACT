import P from 'prop-types';
import { Header } from '../Header';

export const Section = ({ sectionName, headerLevel, children }) => {
  const captalizedName = sectionName.charAt(0).toUpperCase() + sectionName.slice(1);

  return (
    <section className={sectionName} id={sectionName}>
      <div className="container main-content">
        <Header text={captalizedName} level={headerLevel} />
        {children}
      </div>
    </section>
  );
};

Section.propTypes = {
  sectionName: P.string.isRequired,
  headerLevel: P.number.isRequired,
  children: P.node.isRequired,
};
