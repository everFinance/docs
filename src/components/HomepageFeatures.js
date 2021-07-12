import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: 'Guide',
    to: 'docs/guide/intro',
    src: require('../../static/img/sharding.png').default,
    description: (
      <Translate>
        Learn how to use everPay development tools.
      </Translate>
    ),
  },
  {
    title: 'Server API',
    to: 'docs/server-api/intro',
    src: require('../../static/img/compute.png').default,
    description: (
      <Translate>
        everPay server-side API documentation.
      </Translate>
    ),
  },
  {
    title: 'Everpay JS',
    to: 'docs/everpay-js/intro',
    src: require('../../static/img/dev.png').default,
    description: (
      <Translate>
        everPay client-side (nodeJS/Web) tools.
      </Translate>
    ),
  },
];

function Feature({src, title, description, to}) {
  return (
    <Link className={clsx('col col--4', styles.link)} to={to}>
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
