import styles from './page.module.css'
import "@/app/global.css"

export default function Home() {
  return (
    <div>
    <main>
        <h1 className="resume">Resume!</h1>
        <a href="resume.pdf" download >Download Resume</a>
        <div className="resume">
            <section className="section">
                <h2 className="section-title">Education</h2>
                <div className="entry">
                    <h3 className="entry-title">Bachelor of Science in Software Engineering</h3>
                    <p className="entry-info">California Polytechnic State University, San Luis Obispo|Expected Graduation May 2027</p>
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Coursework</h2>
                <ul className="course-list">
                    <li>Data Structures and Algorithms</li>
                    <li>AP CS classes from high school</li>
                </ul>
            </section>

            <section className="section">
                <h2 className="section-title">Skills</h2>
                <ul className="skill-list"></ul>
                    <li>Python</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Java</li>
                    <li>C++</li>

            </section>

            <section className="section">
                <h2 className="section-title">Projects</h2>
                <div className="entry">
                    <h3 className="entry-title"></h3>
                    <p className="entry-info">I have worked on several small projects including designing websites.</p>
                    <p className="entry-description"></p>
                </div>
            </section>

            <section className="section">
                <h2 className="section-title">Experience</h2>
                <div className="entry">
                    <h3 className="entry-title">Hack4Impact Software Developer</h3>
                    <p className="entry-info">Hack4Impact|September 2023 - Present</p>
                    <p className="entry-description">-Complted Hack4Impact Bootcamp -Collaborated with other developers to develop a website for a local non-profit organization</p>
                </div>
            </section>
        </div>
    </main>

    <footer className="footer">
        © 2023 Personal Website Name | All Rights Reserved
    </footer>
  </div>
    )
}
