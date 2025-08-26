import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Benji Switzman</h1>
        <p className={styles.heroSubtitle}>
          Created as a personal website to display projects
        </p>
      </section>

      {/* Main Content */}
      <div className={styles.mainContent}>
        {/* Projects Sidebar */}
        <aside className={styles.sidebar}>
          <div className={styles.projectsSection}>
            <h2 className={styles.sectionTitle}>Projects</h2>
            <h3 className={styles.sectionSubtitle}>Here are some projects I have created:</h3>
            <p className={styles.navText}>
              Navigate to the <Link href="/projects" className={styles.inlineLink}>projects page</Link> for more in-depth descriptions of my projects
            </p>
            
            <h4 className={styles.categoryTitle}>Software Projects</h4>
            <ul className={styles.projectList}>
              <li><Link href="/projects#blackjack" className={styles.projectLink}>Blackjack written in Java</Link></li>
              <li>Snake Game written in C/C++</li>
              <li>Personal Activity System (PAS)</li>
            </ul>
            
            <h4 className={styles.categoryTitle}>Engineering Projects</h4>
            <ul className={styles.projectList}>
              <li>Skeeball</li>
              <li>Reacher-Grabber Holder</li>
            </ul>
          </div>
        </aside>

        {/* About Section */}
        <section className={styles.aboutSection}>
          <h2 className={styles.aboutTitle}>About Me</h2>
          <div className={styles.aboutContent}>
            <div className={styles.aboutText}>
              <p>
                My name is Benji Switzman, I am currently in second year of Computer
                Engineering at McMaster University. I created this website to host the
                personal and in-course projects that I have created.
              </p>
              <p>
                I am interested in looking at creating and evolving systems to make everyday life easier
                whether that be through the health industry, automotive industry, or financial sectors.
              </p>
            </div>
            <div className={styles.imageContainer}>
              <Image
                src="/Headshot.jpg"
                alt="Photo of Benji Switzman"
                width={230}
                height={230}
                className={styles.profileImage}
                priority
              />
              <Image
                src="/Spring 2009 021.jpg"
                alt="A photo of me when I was little!"
                width={150}
                height={230}
                className={styles.profileImage}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Contact Section */}
      <section className={styles.contactSection}>
        <h3 className={styles.contactTitle}>Contact Me!</h3>
        <div className={styles.contactLinks}>
          <a 
            href="mailto:benjiswitzman@gmail.com?subject=Inquiries&body=%20"
            className={styles.contactLink}
          >
            Email
          </a>
          <a 
            href="https://github.com/switzmab" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            My Github
          </a>
          <a 
            href="https://www.linkedin.com/in/benji-switzman/" 
            target="_blank" 
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            Connect on LinkedIn!
          </a>
        </div>
      </section>
    </div>
  );
}