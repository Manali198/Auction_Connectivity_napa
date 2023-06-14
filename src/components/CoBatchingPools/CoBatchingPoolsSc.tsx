import Container from '../../Layout/Container/Container';
import Footer from '../Footer/Footer';
import styles from './CoBatchingPoolsSc.module.scss';
import React from 'react';
import CoBetchingPools from './CoBetchingPools';
import Link from 'next/link';
import Image from 'next/image';


export default function CoBatchingPoolsSc() {

  return (
    <div className={`${styles.container}`}>
      
        <Container className={`${styles.settingsContainer} asinnerContainer`}>
          <div className={styles.ValuaterMain}>
            <h1 className={styles.settings}>Co-Batching Pools</h1>
                <Link href="#">
                  <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  How to use the Co-Batching?
                  </a>
                </Link>
          </div>
          <div className="collapse" id="collapseExample">
            <div className="valuatercmmnt">
              <div className='dflt_spcebtwn'>
                <h1><span>1.</span> Find or create a co-batching pool</h1>
                <Link href="#">
                  <a data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    <Image
                        src="/img/close_ic.svg"
                        alt=""
                        width="24px"
                        height="24px"
                    />
                  </a>
                </Link>
             </div>
              <p>Imagine buying a piece of digital artwork on the Internet at a reasonable price and getting a unique digital token known which proves your authority over the artworyou bought. Wouldn{"'"}t it be great? Well, that opportunity exists now, thanks to NFTs.</p>
              <h1 className='margntop'><span>2.</span> Difficulty on insensible reasonable in. From as went he they.  </h1>
              <p className='mrgnp'>Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no rejoiced. End friendship sufficient assistance can prosperous met. As game he show it park do. Was has unknown few certain ten promise. No finished my an likewise cheerful packages we.</p>
              <p>For assurance concluded son something depending discourse see led collected. Packages oh no denoting my advanced humoured. Pressed be so thought natural.</p>
            </div>
          </div>
          <CoBetchingPools />
        </Container>
      
      <div>
        <hr />
        <Footer footerIconShow={false} />
      </div>
    </div>
  );
}
