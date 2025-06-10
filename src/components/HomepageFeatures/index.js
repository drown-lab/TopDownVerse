import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Collect Data',
    Svg: require('@site/static/img/undraw_science.svg').default,
    description: (
      <>
        Confidently choose appropriate experimental approaches and
        execute them with how-to guides.
      </>
    ),
  },
  {
    title: 'Search for Proteoforms',
    Svg: require('@site/static/img/undraw_space-exploration.svg').default,
    description: (
      <>
        Search for and validate proteoforms in your mass spectrometry data.
      </>
    ),
  },
  {
    title: 'Understand Biology',
    Svg: require('@site/static/img/undraw_cohort-analysis.svg').default,
    description: (
      <>
        Bring a proteoform-resolved view to your biological questions
        with our tools and resources.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
