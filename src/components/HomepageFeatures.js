import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './HomepageFeatures.module.css';
import Translate from '@docusaurus/Translate';

const FeatureList = [
  {
    title: <Translate>DOCS</Translate>,
    to: 'docs/guide/overview',
    src: require('../../static/img/sharding.png').default,
    description: (
      <Translate>
        了解、深入 everPay 协议
      </Translate>
    ),
  },
  {
    title: 'SDK',
    to: 'docs/guide/SDK/intro',
    src: require('../../static/img/dev.png').default,
    description: (
      <Translate>
        everPay 客户端 SDK
      </Translate>
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
