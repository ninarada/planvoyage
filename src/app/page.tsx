import HelpSection from './_components/help/HelpSection';
import HeroSection from './_components/hero/HeroSection';
import BlogSection from './_components/blog/BlogSection';
import styles from './home.module.css'
import Link from 'next/link'
import Image from 'next/image';


export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.landingFrame1}>
        <Image className={styles.bgIMG} src={'/images/bg.jpg'} alt={'backgroundIMG'} fill={true} priority layout="fill" objectFit="cover"  />
        <div className={styles.sloganContainer}>
          <p className={styles.slogan}>Navigating Your Journey, One Adventure at a Time!</p>
          <Link href="/destinations" className={styles.btn}>Explore Now</Link>
        </div>
        
      </div>
      <div className={styles.discoverFrame2}>
        <div className={styles.discover}>
          <h1 className={styles.discoverTitle}>Discover</h1>
          <p className={styles.discoverText}>Unveil the allure of enchanting cities. Immerse yourself in diverse cultures, savor local flavors, and create unforgettable memories.</p>
          <Link href="/destinations" className={styles.btn}>Explore Now</Link>
        </div>
        <div className={styles.heroDestinations}>
          <HeroSection />
        </div>
      </div>
      <div className={styles.Frame3}>
        <HelpSection />
      </div>
      <div className={styles.blogsFrame}>
        <BlogSection />
      </div>
    </div>
  );
}