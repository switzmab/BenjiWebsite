import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'Projects | Benji Switzman',
  description: 'Explore my software and engineering projects including games, applications, and innovative solutions.',
};

export default function Projects() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <Link href="/" className={styles.homeLink}>
          <strong>Benji's Website</strong>
        </Link>
        <h1 className={styles.title}>Projects</h1>
      </header>

      {/* Table of Contents */}
      <section className={styles.tableOfContents}>
        <h2>Table of Contents</h2>
        <p>Click these links to jump down to the portions of the page</p>
        <nav className={styles.tocNav}>
          <Link href="#blackjack" className={styles.tocLink}>Blackjack</Link>
          <Link href="#snake" className={styles.tocLink}>Snake Game</Link>
          <Link href="#pas" className={styles.tocLink}>Personal Activity System</Link>
        </nav>
      </section>

      {/* Software Projects */}
      <section className={styles.projectSection}>
        <h2 className={styles.sectionTitle}>Software Projects</h2>
        
        {/* Java Projects */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Java Projects</h3>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard} id="blackjack">
              <h4 className={styles.projectTitle}>Blackjack</h4>
              <p className={styles.projectDescription}>
                I initially created blackjack for a project in high school which
                tasked us with creating an object-oriented program using many different
                features we learned throughout the course. After finishing the course, I
                have optimized many components of the program and implemented JFrame graphic components.
              </p>
              <div className={styles.projectTags}>
                <span className={styles.tag}>Java</span>
                <span className={styles.tag}>Object-Oriented</span>
                <span className={styles.tag}>GUI</span>
              </div>
            </div>
            
            <div className={styles.projectCard}>
              <h4 className={styles.projectTitle}>Kinematics Grapher</h4>
              <p className={styles.projectDescription}>
                I used a methods assignment focused on doing basic 1 dimensional
                kinematics calculations to build a GUI that would display the
                calculations on a graph once calculated.
              </p>
              <div className={styles.projectTags}>
                <span className={styles.tag}>Java</span>
                <span className={styles.tag}>Physics</span>
                <span className={styles.tag}>Graphing</span>
              </div>
            </div>
          </div>
        </div>

        {/* C/C++ Projects */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>C/C++ Projects</h3>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard} id="snake">
              <h4 className={styles.projectTitle}>Snake Game</h4>
              <p className={styles.projectDescription}>
                Throughout my programming course, I built an object-oriented program in C++ that allowed for a user to play the classic snake game in the terminal. 
                Also used dynamic memory allocation to keep memory leaks within the program to 0.
              </p>
              <div className={styles.projectTags}>
                <span className={styles.tag}>C++</span>
                <span className={styles.tag}>Memory Management</span>
                <span className={styles.tag}>Game Development</span>
              </div>
            </div>
          </div>
        </div>

        {/* Modern Projects */}
        <div className={styles.subsection}>
          <h3 className={styles.subsectionTitle}>Modern Applications</h3>
          <div className={styles.projectGrid}>
            <div className={styles.projectCard + ' ' + styles.featuredProject} id="pas">
              <h4 className={styles.projectTitle}>Personal Activity System (PAS)</h4>
              <p className={styles.projectDescription}>
                A comprehensive personal productivity and activity tracking application designed to help users 
                manage their daily routines, goals, and activities. Features modern web technologies and 
                intuitive user interface design for seamless user experience.
              </p>
              <div className={styles.projectFeatures}>
                <ul>
                  <li>Activity tracking and analytics</li>
                  <li>Goal setting and progress monitoring</li>
                  <li>Modern responsive design</li>
                  <li>Data visualization and insights</li>
                </ul>
              </div>
              <div className={styles.projectTags}>
                <span className={styles.tag}>React</span>
                <span className={styles.tag}>Node.js</span>
                <span className={styles.tag}>Database</span>
                <span className={styles.tag}>UI/UX</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Projects Placeholder */}
      <section className={styles.projectSection}>
        <h2 className={styles.sectionTitle}>Engineering Projects</h2>
        <div className={styles.projectGrid}>
          <div className={styles.projectCard}>
            <h4 className={styles.projectTitle}>Skeeball Machine</h4>
            <p className={styles.projectDescription}>
              Mechanical engineering project involving design and construction of a functional skeeball game.
            </p>
            <div className={styles.projectTags}>
              <span className={styles.tag}>Mechanical Design</span>
              <span className={styles.tag}>CAD</span>
            </div>
          </div>
          
          <div className={styles.projectCard}>
            <h4 className={styles.projectTitle}>Reacher-Grabber Holder</h4>
            <p className={styles.projectDescription}>
              Assistive device design project focused on improving accessibility and independence.
            </p>
            <div className={styles.projectTags}>
              <span className={styles.tag}>Product Design</span>
              <span className={styles.tag}>Accessibility</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}