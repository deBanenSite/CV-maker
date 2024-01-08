import type { NextPage } from 'next'
import Link from 'next/link'

import Layout from '../layouts/Layout'
import SEO from "../components/seo"

import CluoImg from '../images/home/cluo-sample.png'
import CogitoImg from '../images/home/cogito-sample.png'
import TeresImg from '../images/home/teres-sample.png'

import styles from '../styles/home.module.scss'

const Home: NextPage = () => {
  return (
    <Layout fluid={true}>
      <SEO title="Home" />
           <section className="container">
        <h1 className={styles.createHeader}>CV maker</h1>
        <div className={styles.create}>
          <div className={styles.createStep}>
            <div className={styles.createNumber}>1.</div>
            <h2>Inhoud toevoegen</h2>
            <p>Stap voor stap en overzichtelijk.</p>
          </div>
          <div className={styles.createStep}>
            <div className={styles.createNumber}>2.</div>
            <h2>Ontwerpen</h2>
            <p>Kies uit een selectie van kleuren voor de vormgeving van je cv.
</p>
          </div>
          <div className={styles.createStep}>
            <div className={styles.createNumber}>3.</div>
            <h2>Eindresultaat in PDF</h2>
            <p>Download het gemaakte CV en voeg dit direct toe aan je account.</p>
          </div>
          <div className={styles.createStep}>
            <div className={styles.createNumber}>4.</div>
            <h2>Carrière maken</h2>
            <p>Start met zorgeloos en snel solliciteren.</p>
          </div>
        </div>
      </section>
      <div className={styles.action}>
          <Link href="/app" legacyBehavior>
            <a className="btn btn-link btn-primary btn-lg">Maak een nieuw CV</a>
          </Link>
          <Link href={{ pathname: '/app', query: { continue: true }}} legacyBehavior>
            <a className="btn btn-link btn-secondary">Ga verder met een bestaande CV</a>
          </Link>
        </div>
        <section className={styles.jumbotron}>
        <div className={styles.title}>
          <h1>
          </h1>
        </div>
        <div className={styles.spacer} />
        <div className={styles.samples}>
          <img src={CluoImg.src} alt="" className={styles.sampleImg + ' ' + styles.sampleOne} />
          <img src={CogitoImg.src} alt="" className={styles.sampleImg}  />
          <img src={TeresImg.src} alt="" className={styles.sampleImg + ' ' + styles.sampleThree}  />
        </div>
      </section>
      <section className="container">
        <div className={styles.privacy}>
          <h1>Je privacy is <span>beschermd!</span></h1>
          <p>
           De CV maker tool werkt volledig client-side.<br></br>
           <br></br>
         <strong>Dat betekent dat er geen externe gegevensverwerking of servers bij betrokken zijn.</strong> </p>
          <p>
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default Home
