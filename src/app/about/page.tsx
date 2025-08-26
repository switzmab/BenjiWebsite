import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata = {
  title: 'About Me | Benji Switzman',
  description: 'Learn more about Benji Switzman, a Computer Engineering student at McMaster University passionate about creating systems to improve everyday life.',
};

export default function About() {
  return (
    <div className={styles.container}>
      {/* Header */}
      <header className={styles.header}>
        <Link href="/" className={styles.homeLink}>
          <strong>Benji's Website</strong>
        </Link>
        <h1 className={styles.title}>About Me</h1>
      </header>

      {/* Main Content */}
      <section className={styles.aboutSection}>
        <div className={styles.content}>
          <div className={styles.textSection}>
            <h2 className={styles.sectionTitle}>Hello! I'm Benji Switzman</h2>
            
            <div className={styles.bioText}>
              <p>
                I am currently in my second year of Computer Engineering at McMaster University. 
                My journey into engineering began with a fascination for how technology can solve 
                real-world problems and improve people's lives.
              </p>
              
              <p>
                I created this website to showcase the personal and academic projects that I have 
                developed throughout my studies. Each project represents a learning milestone and 
                demonstrates my growing expertise in software development, system design, and 
                engineering principles.
              </p>
              
              <p>
                My interests lie in creating and evolving systems that make everyday life easier 
                and more efficient. I'm particularly drawn to applications in:
              </p>
              
              <ul className={styles.interestsList}>
                <li><strong>Healthcare Technology:</strong> Developing solutions that improve patient care and medical processes</li>
                <li><strong>Automotive Industry:</strong> Contributing to smart transportation and autonomous systems</li>
                <li><strong>Financial Technology:</strong> Creating secure and user-friendly financial applications</li>
                <li><strong>Personal Productivity:</strong> Building tools that help people organize and optimize their daily activities</li>
              </ul>
              
              <p>
                Through my coursework and personal projects, I've gained experience in various 
                programming languages including Java, C/C++, and modern web technologies. I enjoy 
                the challenge of object-oriented design, memory management, and creating intuitive 
                user interfaces.
              </p>
            </div>
          </div>
          
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image
                src="/Headshot.jpg"
                alt="Professional photo of Benji Switzman"
                width={280}
                height={280}
                className={styles.profileImage}
                priority
              />
              <p className={styles.imageCaption}>Professional headshot</p>
            </div>
            
            <div className={styles.imageContainer}>
              <Image
                src="/Spring 2009 021.jpg"
                alt="Childhood photo of Benji"
                width={180}
                height={280}
                className={styles.profileImage}
              />
              <p className={styles.imageCaption}>A throwback photo!</p>
            </div>
          </div>
        </div>
        
        {/* Skills Section */}
        <div className={styles.skillsSection}>
          <h3 className={styles.skillsTitle}>Technical Skills & Interests</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h4>Programming Languages</h4>
              <ul>
                <li>Java</li>
                <li>C/C++</li>
                <li>JavaScript/TypeScript</li>
                <li>Python</li>
              </ul>
            </div>
            
            <div className={styles.skillCategory}>
              <h4>Technologies & Frameworks</h4>
              <ul>
                <li>React/Next.js</li>
                <li>Node.js</li>
                <li>Git/Version Control</li>
                <li>Database Systems</li>
              </ul>
            </div>
            
            <div className={styles.skillCategory}>
              <h4>Engineering Concepts</h4>
              <ul>
                <li>Object-Oriented Design</li>
                <li>System Architecture</li>
                <li>Memory Management</li>
                <li>UI/UX Design</li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Contact Section */}
        <div className={styles.contactSection}>
          <h3 className={styles.contactTitle}>Let's Connect!</h3>
          <p className={styles.contactDescription}>
            I'm always interested in discussing technology, engineering projects, or potential collaboration opportunities.
          </p>
          <div className={styles.contactLinks}>
            <a 
              href="mailto:benjiswitzman@gmail.com?subject=Hello from your website!"
              className={styles.contactLink}
            >
              📧 Email Me
            </a>
            <a 
              href="https://github.com/switzmab" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              💻 GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/benji-switzman/" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}