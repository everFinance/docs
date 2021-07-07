import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Tutorial',
    to: 'docs/tutorial/intro',
    src: require('../../static/img/sharding.png').default,
    description: (
      <>
        Learn how to use everPay development tools.
      </>
    ),
  },
  {
    title: 'API',
    to: 'docs/everpay/intro',
    src: require('../../static/img/dev.png').default,
    description: (
      <>
        Includes everPay server-side API documentation and client-side (nodeJS/Web) tools.
      </>
    ),
  },
];

function Feature({src, title, description, to}) {
  return (
    <Link className={clsx('col col--6', styles.link)} to={to}>
      <div className="text--center">
        <img className={styles.featureImg} alt={title} src={src} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </Link>
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
