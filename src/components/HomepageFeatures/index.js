import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import { useLocation } from '@docusaurus/router';

const FeatureList = [
  {
    title: 'WELLDONE Wallet',
    imgSrc: '/img/wallet.svg',
    description: {
      ko: (
        <>
          하나의 프로바이더로 새로운 수준의 성능을 구현합니다. 모든 자산을 위한 단 하나의 지갑. 또한
          여러 체인으로 쉽게 개발, 테스트 및 배포할 수 있습니다.
        </>
      ),
      en: (
        <>
          Enabling new levels of performance with a single provider. A single wallet for all your
          assets. And develop, test, and deploy easily across multiple chains.
        </>
      ),
    },

    //     link: 'https://chrome.google.com/webstore/detail/welldone-wallet/bmkakpenjmcpfhhjadflneinmhboecjf',
    link: {
      ko: 'https://docs.welldonestudio.io/ko/wallet/',
      en: 'https://docs.welldonestudio.io/wallet',
    },
  },
  {
    title: 'WELLDONE Code',
    imgSrc: '/img/code.svg',
    description: {
      ko: (
        <>
          생산성 향상을 위한 범용 코드. WELLDONE Code를 Remix IDE(개발 도구)에 적용하면 스마트
          컨트랙트 개발할 때 다양한 언어와 컴파일러를 원활하게 사용할 수 있습니다.
        </>
      ),
      en: (
        <>
          Versatile code for enhanced productivity. Apply WELLDONE Code to Remix IDE (development
          tools) to seamlessly use various languages and compilers when building smart contracts.
        </>
      ),
    },
    link: {
      ko: 'https://docs.welldonestudio.io/ko/code',
      en: 'https://docs.welldonestudio.io/code',
    },
  },
];

function Feature({ imgSrc, title, description, link }) {
  const location = useLocation();

  const lang = location.pathname === '/' ? 'en' : 'ko';
  const handleClick = (e) => {
    window.open(e.currentTarget.id, '_self');
  };
  return (
    <div className={clsx('col', styles['col--4'])}>
      <div
        className="text--center"
        id={link[lang]}
        onClick={handleClick}
        role="button"
        aria-pressed="false"
        tabIndex="0"
      >
        <img
          src={imgSrc}
          className={clsx(styles.featureSvg, link && styles.cursorPointer)}
          style={{ width: '100%' }}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3 className={styles.featureTitle}>{title}</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p className={styles.featureDesc}>{description[lang]}</p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{ justifyContent: 'center' }}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
